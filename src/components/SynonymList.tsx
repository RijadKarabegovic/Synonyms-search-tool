import {
  EnrichedSynonymResult,
  SOURCE_LABELS,
  SynonymSource,
  TaggedSynonym,
} from "../types";

interface SynonymListProps {
  results: EnrichedSynonymResult;
  onSelect: (word: string) => void;
}

async function copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}

function SourceBadge({ source }: { source: SynonymSource }) {
  return (
    <span className={`source-badge source-badge-${source}`}>
      {SOURCE_LABELS[source]}
    </span>
  );
}

function SynonymSection({
  title,
  source,
  synonyms,
  onSelect,
}: {
  title: string;
  source: SynonymSource;
  synonyms: TaggedSynonym[];
  onSelect: (word: string) => void;
}) {
  if (synonyms.length === 0) {
    return null;
  }

  return (
    <section className="source-section" aria-label={title}>
      <div className="source-section-header">
        <h3 className="source-section-title">{title}</h3>
        <SourceBadge source={source} />
      </div>
      <ul className="synonym-grid" role="list">
        {synonyms.map((synonym) => (
          <li key={`${source}-${synonym.word}`}>
            <button
              type="button"
              className="synonym-chip"
              onClick={() => onSelect(synonym.word)}
              title={`Search for ${synonym.word}`}
            >
              <span>{synonym.word}</span>
              <span
                className="copy-icon"
                aria-hidden="true"
                onClick={(event) => {
                  event.stopPropagation();
                  void copyToClipboard(synonym.word);
                }}
              >
                ⧉
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SynonymList({ results, onSelect }: SynonymListProps) {
  const { word, synonyms, bySource, totalCount } = results;

  if (totalCount === 0) {
    return (
      <p className="text-muted text-sm" role="status">
        No synonyms found across community, dictionary, or online sources.
      </p>
    );
  }

  const communitySynonyms = synonyms.filter((item) =>
    item.sources.includes("community")
  );
  const dictionarySynonyms = synonyms.filter(
    (item) =>
      item.sources.includes("dictionary") && !item.sources.includes("community")
  );
  const onlineSynonyms = synonyms.filter((item) => item.sources.includes("online"));

  const allWords = synonyms.map((item) => item.word);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div>
          <h2 className="text-lg font-semibold text-primary">
            Synonyms for &ldquo;{word}&rdquo;
          </h2>
          <p className="text-muted text-sm mt-1">
            {totalCount} result{totalCount === 1 ? "" : "s"} from{" "}
            {[
              bySource.community.length > 0 ? "community" : null,
              bySource.dictionary.length > 0 ? "dictionary" : null,
              bySource.online.length > 0 ? "online" : null,
            ]
              .filter(Boolean)
              .join(", ")}
          </p>
        </div>
        <button
          type="button"
          className="btn-secondary text-sm"
          onClick={() => copyToClipboard(allWords.join(", "))}
        >
          Copy all
        </button>
      </div>

      <SynonymSection
        title="Your community dictionary"
        source="community"
        synonyms={communitySynonyms}
        onSelect={onSelect}
      />
      <SynonymSection
        title="Static WordNet dictionary"
        source="dictionary"
        synonyms={dictionarySynonyms}
        onSelect={onSelect}
      />
      <SynonymSection
        title="Online suggestions"
        source="online"
        synonyms={onlineSynonyms}
        onSelect={onSelect}
      />
    </div>
  );
}
