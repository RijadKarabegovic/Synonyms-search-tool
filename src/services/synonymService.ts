import {
  doc,
  getDoc,
  writeBatch,
  type Firestore,
} from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "../config/firebase";
import { SynonymError } from "../types";
import {
  dedupeSynonyms,
  mergeSynonymLists,
  normalizeWord,
  parseSynonymInput,
} from "../utils/synonymUtils";

const COLLECTION = "words";

const searchCache = new Map<string, string[]>();

function wordRef(firestore: Firestore, word: string) {
  return doc(firestore, COLLECTION, word);
}

async function readSynonyms(
  firestore: Firestore,
  word: string
): Promise<string[] | null> {
  const snapshot = await getDoc(wordRef(firestore, word));
  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();
  return dedupeSynonyms(Array.isArray(data.synonyms) ? data.synonyms : []);
}

export async function fetchSynonyms(
  word: string,
  firestore?: Firestore
): Promise<string[]> {
  const db = firestore ?? getDb();
  const normalized = normalizeWord(word);
  if (!normalized) {
    throw new SynonymError("EMPTY_WORD");
  }

  const cached = searchCache.get(normalized);
  if (cached) {
    return cached;
  }

  const synonyms = await readSynonyms(db, normalized);
  if (synonyms === null) {
    throw new SynonymError("NOT_FOUND");
  }

  searchCache.set(normalized, synonyms);
  return synonyms;
}

export async function addWordWithSynonyms(
  word: string,
  synonymInput: string,
  firestore?: Firestore
): Promise<void> {
  if (!firestore && !isFirebaseConfigured()) {
    throw new SynonymError("FIREBASE_NOT_CONFIGURED");
  }

  const db = firestore ?? getDb();
  const normalizedWord = normalizeWord(word);
  const inputSynonyms = parseSynonymInput(synonymInput).filter(
    (synonym) => synonym !== normalizedWord
  );

  if (!normalizedWord) {
    throw new SynonymError("EMPTY_WORD");
  }
  if (inputSynonyms.length === 0) {
    throw new SynonymError("EMPTY_SYNONYMS");
  }

  const existingWord = await readSynonyms(db, normalizedWord);
  if (existingWord !== null) {
    throw new SynonymError("WORD_EXISTS");
  }

  const cluster = new Set<string>(inputSynonyms);

  for (const synonym of inputSynonyms) {
    const existingSynonyms = await readSynonyms(db, synonym);
    if (existingSynonyms) {
      existingSynonyms.forEach((related) => cluster.add(related));
    }
  }

  cluster.delete(normalizedWord);
  const clusterMembers = [normalizedWord, ...cluster];
  const batch = writeBatch(db);

  for (const member of clusterMembers) {
    const others = clusterMembers.filter((item) => item !== member);
    const memberSnapshot = await getDoc(wordRef(db, member));

    if (memberSnapshot.exists()) {
      const currentSynonyms = dedupeSynonyms(
        Array.isArray(memberSnapshot.data().synonyms)
          ? memberSnapshot.data().synonyms
          : []
      );
      batch.update(wordRef(db, member), {
        synonyms: mergeSynonymLists(currentSynonyms, others, member),
      });
    } else {
      batch.set(wordRef(db, member), {
        word: member,
        synonyms: others,
      });
    }
  }

  await batch.commit();
  searchCache.clear();
}

export function clearSynonymCache(): void {
  searchCache.clear();
}

export function getSynonymErrorMessage(code: SynonymError["code"]): string {
  switch (code) {
    case "EMPTY_WORD":
      return "Please enter a word.";
    case "EMPTY_SYNONYMS":
      return "Please enter at least one synonym.";
    case "WORD_EXISTS":
      return "This word already exists in the dictionary.";
    case "NOT_FOUND":
      return "Word not found.";
    case "FIREBASE_NOT_CONFIGURED":
      return "Community dictionary is unavailable until Firebase is configured.";
    case "NETWORK":
      return "Network error. Check your connection and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
