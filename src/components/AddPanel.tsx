import { FormEvent } from "react";

interface AddPanelProps {
  word: string;
  synonymInput: string;
  error: string;
  isLoading: boolean;
  onWordChange: (value: string) => void;
  onSynonymInputChange: (value: string) => void;
  onSubmit: () => void;
}

export function AddPanel({
  word,
  synonymInput,
  error,
  isLoading,
  onWordChange,
  onSynonymInputChange,
  onSubmit,
}: AddPanelProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <section aria-labelledby="add-heading" className="panel-section">
      <h1 id="add-heading" className="panel-title">
        Add Word &amp; Synonyms
      </h1>
      <p className="panel-subtitle">
        Expand the dictionary by linking a new word to its synonyms.
      </p>

      <form onSubmit={handleSubmit} className="form-stack">
        <label htmlFor="add-word" className="field-label">
          Word
        </label>
        <input
          id="add-word"
          type="text"
          className="field-input"
          value={word}
          onChange={(event) => onWordChange(event.target.value)}
          placeholder="e.g. joyful"
          autoComplete="off"
        />

        <label htmlFor="add-synonyms" className="field-label">
          Synonym(s)
        </label>
        <input
          id="add-synonyms"
          type="text"
          className="field-input"
          value={synonymInput}
          onChange={(event) => onSynonymInputChange(event.target.value)}
          placeholder="e.g. happy, cheerful"
          autoComplete="off"
          aria-describedby="add-synonyms-hint"
        />
        <p id="add-synonyms-hint" className="field-hint">
          Separate multiple synonyms with commas (e.g. &ldquo;large, huge&rdquo;).
        </p>

        {error && (
          <p className="error-banner" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? "Saving…" : "Add to dictionary"}
        </button>
      </form>
    </section>
  );
}
