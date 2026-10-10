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
import { FirebaseConfigNotice } from "./FirebaseConfigNotice";
import { ModeToggle } from "./ModeToggle";
import { SearchPanel } from "./SearchPanel";
import { ThemeToggle } from "./ThemeToggle";
import type { AppMode } from "../types";

export function SynonymApp() {
  const firebaseReady = isFirebaseConfigured();
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
    if (nextMode === "add" && !firebaseReady) {
      return;
    }
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
      if (
        error instanceof SynonymError &&
        error.code === "FIREBASE_NOT_CONFIGURED"
      ) {
        setAddError(
          "Firebase is not configured. Add VITE_FIREBASE_* variables in Vercel and redeploy."
        );
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

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <main className="app-shell">
        <header className="app-header">
          <ModeToggle
            mode={mode}
            onChange={handleModeChange}
            communityEnabled={firebaseReady}
          />
          <ThemeToggle />
        </header>

        {!firebaseReady && <FirebaseConfigNotice />}

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
