export function normalizeWord(word: string): string {
  return word.trim().toLowerCase();
}

export function parseSynonymInput(input: string): string[] {
  return [
    ...new Set(
      input
        .split(/,\s*/)
        .map(normalizeWord)
        .filter(Boolean)
    ),
  ];
}

export function dedupeSynonyms(synonyms: string[]): string[] {
  return [...new Set(synonyms.map(normalizeWord).filter(Boolean))];
}

export function mergeSynonymLists(
  existing: string[],
  incoming: string[],
  excludeWord: string
): string[] {
  const merged = dedupeSynonyms([...existing, ...incoming]);
  return merged.filter((word) => word !== excludeWord);
}
