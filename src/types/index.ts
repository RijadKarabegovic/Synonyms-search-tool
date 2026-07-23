export type AppMode = "search" | "add";

export type SynonymSource = "community" | "dictionary" | "online";

export interface WordDocument {
  word: string;
  synonyms: string[];
}

export interface TaggedSynonym {
  word: string;
  sources: SynonymSource[];
}

export interface EnrichedSynonymResult {
  word: string;
  synonyms: TaggedSynonym[];
  bySource: Record<SynonymSource, string[]>;
  totalCount: number;
}

export type SynonymErrorCode =
  | "EMPTY_WORD"
  | "EMPTY_SYNONYMS"
  | "WORD_EXISTS"
  | "NOT_FOUND"
  | "NETWORK"
  | "UNKNOWN";

export class SynonymError extends Error {
  constructor(public readonly code: SynonymErrorCode) {
    super(code);
    this.name = "SynonymError";
  }
}

export const SOURCE_LABELS: Record<SynonymSource, string> = {
  community: "Community",
  dictionary: "Dictionary",
  online: "Online (Datamuse)",
};
