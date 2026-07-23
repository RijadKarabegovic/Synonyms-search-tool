import { FormEvent, Ref } from "react";
import { EnrichedSynonymResult } from "../types";
import { SynonymList } from "./SynonymList";

interface SearchPanelProps {
  word: string;
  onWordChange: (value: string) => void;
  onSearch: () => void;
  isLoading: boolean;
  results: EnrichedSynonymResult | null;
  searchedWord: string;
  onSelectSynonym: (word: string) => void;
  recentSearches: string[];
  onRecentSelect: (word: string) => void;
  onClearRecent: () => void;
  inputRef: Ref<HTMLInputElement>;
}

export function SearchPanel({
  word,
  onWordChange,
  onSearch,
  isLoading,
  results,
  searchedWord,
  onSelectSynonym,
  recentSearches,
  onRecentSelect,
  onClearRecent,
  inputRef,
}: SearchPanelProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <section aria-labelledby="search-heading" className="panel-section">
      <h1 id="search-heading" className="panel-title">
        Synonyms Search Tool
      </h1>
      <p className="panel-subtitle">
        Combines your Firestore dictionary, a static WordNet dataset (~12k
        words), and live Datamuse suggestions. Press <kbd className="kbd">/</kbd>{" "}
        to focus search.
      </p>

      <form onSubmit={handleSubmit} className="form-stack">
        <label htmlFor="search-word" className="field-label">
          Word
        </label>
        <input
          ref={inputRef}
          id="search-word"
          type="text"
          className="field-input"
          value={word}
          onChange={(event) => onWordChange(event.target.value)}
          placeholder="e.g. happy"
          autoComplete="off"
          aria-describedby="search-hint"
        />
        <p id="search-hint" className="field-hint">
          Enter a word and press Enter or click Search.
        </p>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? "Searching…" : "Search synonyms"}
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div className="recent-block">
          <div className="recent-header">
            <span className="text-sm font-medium text-primary">Recent</span>
            <button
              type="button"
              className="link-button text-sm"
              onClick={onClearRecent}
            >
              Clear
            </button>
          </div>
          <div className="recent-list">
            {recentSearches.map((item) => (
              <button
                key={item}
                type="button"
                className="recent-chip"
                onClick={() => onRecentSelect(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {searchedWord && results && (
        <div className="results-block" aria-live="polite">
          <SynonymList results={results} onSelect={onSelectSynonym} />
        </div>
      )}
    </section>
  );
}
