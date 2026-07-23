import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import {
  addWordWithSynonyms,
  fetchEnrichedSynonyms,
  getSynonymErrorMessage,
} from "../services/enrichedSynonymService";
import { EnrichedSynonymResult, SynonymError } from "../types";

export function useSynonyms() {
  const [results, setResults] = useState<EnrichedSynonymResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const search = useCallback(async (word: string) => {
    setIsLoading(true);
    try {
      const enriched = await fetchEnrichedSynonyms(word);
      setResults(enriched);
      return enriched;
    } catch (error) {
      setResults(null);
      if (error instanceof SynonymError) {
        toast.error(getSynonymErrorMessage(error.code));
      } else {
        toast.error(getSynonymErrorMessage("UNKNOWN"));
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addWord = useCallback(async (word: string, synonymInput: string) => {
    setIsLoading(true);
    try {
      await addWordWithSynonyms(word, synonymInput);
      toast.success("Word and synonyms added successfully.");
    } catch (error) {
      if (error instanceof SynonymError) {
        toast.error(getSynonymErrorMessage(error.code));
      } else {
        toast.error(getSynonymErrorMessage("UNKNOWN"));
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults(null);
  }, []);

  return {
    results,
    isLoading,
    search,
    addWord,
    clearResults,
    setResults,
  };
}
