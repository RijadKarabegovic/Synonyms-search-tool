import { dedupeSynonyms, normalizeWord } from "../utils/synonymUtils";

const DATAMUSE_URL = "https://api.datamuse.com/words";
const MAX_RESULTS = 20;

interface DatamuseWord {
  word: string;
  score?: number;
}

export async function fetchOnlineSynonyms(word: string): Promise<string[]> {
  const normalized = normalizeWord(word);
  if (!normalized) {
    return [];
  }

  const params = new URLSearchParams({
    rel_syn: normalized,
    max: String(MAX_RESULTS),
  });

  const response = await fetch(`${DATAMUSE_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("Datamuse request failed");
  }

  const data = (await response.json()) as DatamuseWord[];

  return dedupeSynonyms(
    data
      .map((entry) => entry.word)
      .filter((synonym) => synonym !== normalized)
  );
}
