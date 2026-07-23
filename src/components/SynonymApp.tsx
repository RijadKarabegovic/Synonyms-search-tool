import { useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isFirebaseConfigured } from "../config/firebase";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useRecentSearches } from "../hooks/useRecentSearches";
import { useSynonyms } from "../hooks/useSynonyms";
import { SynonymError } from "../types";
import { normalizeWord } from "../utils/synonymUtils";
import { AddPanel } from "./AddPanel";
import { ModeToggle } from "./ModeToggle";
import { SearchPanel } from "./SearchPanel";
import { ThemeToggle } from "./ThemeToggle";
import type { AppMode } from "../types";

export function SynonymApp() {
  const [mode, setMode] = useState<AppMode>("search");
  const [word, setWord] = useState("");
  const [synonymInput, setSynonymInput] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [addError, setAddError] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { results, isLoading, search, addWord, clearResults } = useSynonyms();
  const { recent, addRecent, clearRecent } = useRecentSearches();

  const resetForm = () => {
    setWord("");
    setSynonymInput("");
    setAddError("");
    clearResults();
    setSearchedWord("");
  };

  const handleModeChange = (nextMode: AppMode) => {
    setMode(nextMode);
    resetForm();
  };

  const handleSearch = async (value?: string) => {
    const query = normalizeWord(value ?? word);
    if (!query) {
      setSearchedWord("");
      clearResults();
      return;
    }

    setWord(query);
    try {
      await search(query);
      setSearchedWord(query);
      addRecent(query);
    } catch {
      setSearchedWord("");
    }
  };

  const handleAdd = async () => {
    setAddError("");
    try {
      await addWord(word, synonymInput);
      setWord("");
      setSynonymInput("");
    } catch (error) {
      if (error instanceof SynonymError && error.code === "WORD_EXISTS") {
        setAddError("This word already exists in the dictionary.");
      }
    }
  };

  useKeyboardShortcuts({
    onFocusSearch: () => {
      if (mode === "search") {
        searchInputRef.current?.focus();
      }
    },
    onClear: resetForm,
  });

  if (!isFirebaseConfigured()) {
    return (
      <main className="app-shell">
        <div className="panel-card">
          <h1 className="panel-title">Configuration required</h1>
          <p className="panel-subtitle">
            Copy <code>.env.example</code> to <code>.env</code> and add your
            Firebase credentials before using the app.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <main className="app-shell">
        <header className="app-header">
          <ModeToggle mode={mode} onChange={handleModeChange} />
          <ThemeToggle />
        </header>

        <div className="panel-card">
          {mode === "search" ? (
            <SearchPanel
              word={word}
              onWordChange={setWord}
              onSearch={() => void handleSearch()}
              isLoading={isLoading}
              results={results}
              searchedWord={searchedWord}
              onSelectSynonym={(value) => void handleSearch(value)}
              recentSearches={recent}
              onRecentSelect={(value) => void handleSearch(value)}
              onClearRecent={clearRecent}
              inputRef={searchInputRef}
            />
          ) : (
            <AddPanel
              word={word}
              synonymInput={synonymInput}
              error={addError}
              isLoading={isLoading}
              onWordChange={setWord}
              onSynonymInputChange={setSynonymInput}
              onSubmit={() => void handleAdd()}
            />
          )}
        </div>
      </main>
    </>
  );
}
