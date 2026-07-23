import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "synonyms-recent-searches";
const MAX_RECENT = 8;

export function useRecentSearches() {
  const [recent, setRecent] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as string[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  }, [recent]);

  const addRecent = useCallback((word: string) => {
    const normalized = word.trim().toLowerCase();
    if (!normalized) return;

    setRecent((current) => {
      const next = [normalized, ...current.filter((item) => item !== normalized)];
      return next.slice(0, MAX_RECENT);
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecent([]);
  }, []);

  return { recent, addRecent, clearRecent };
}
