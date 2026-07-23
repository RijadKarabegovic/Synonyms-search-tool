import { dedupeSynonyms, normalizeWord } from "../utils/synonymUtils";

type StaticDictionary = Record<string, string[]>;

let dictionary: StaticDictionary | null = null;
let loadPromise: Promise<StaticDictionary> | null = null;

async function loadDictionary(): Promise<StaticDictionary> {
  if (dictionary) {
    return dictionary;
  }

  if (!loadPromise) {
    loadPromise = fetch("/data/synonyms.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load static dictionary");
        }
        return response.json() as Promise<StaticDictionary>;
      })
      .then((data) => {
        dictionary = data;
        return data;
      })
      .catch(() => {
        loadPromise = null;
        dictionary = {};
        return dictionary;
      });
  }

  return loadPromise;
}

function reverseLookup(data: StaticDictionary, word: string): string[] {
  const matches = new Set<string>();

  for (const [entry, synonyms] of Object.entries(data)) {
    if (synonyms.includes(word)) {
      matches.add(entry);
      synonyms.forEach((synonym) => {
        if (synonym !== word) {
          matches.add(synonym);
        }
      });
    }
  }

  return [...matches];
}

export async function fetchStaticSynonyms(word: string): Promise<string[]> {
  const normalized = normalizeWord(word);
  if (!normalized) {
    return [];
  }

  const data = await loadDictionary();
  const direct = data[normalized];

  if (direct?.length) {
    return dedupeSynonyms(direct.filter((synonym) => synonym !== normalized));
  }

  return dedupeSynonyms(reverseLookup(data, normalized));
}

export function clearStaticDictionaryCache(): void {
  dictionary = null;
  loadPromise = null;
}
