import { describe, expect, it } from "vitest";
import {
  dedupeSynonyms,
  mergeSynonymLists,
  normalizeWord,
  parseSynonymInput,
} from "../utils/synonymUtils";

describe("normalizeWord", () => {
  it("trims and lowercases input", () => {
    expect(normalizeWord("  Happy ")).toBe("happy");
  });

  it("returns empty string for whitespace-only input", () => {
    expect(normalizeWord("   ")).toBe("");
  });
});

describe("parseSynonymInput", () => {
  it("parses comma-separated synonyms", () => {
    expect(parseSynonymInput("large, huge, big")).toEqual([
      "large",
      "huge",
      "big",
    ]);
  });

  it("deduplicates synonyms", () => {
    expect(parseSynonymInput("happy, Happy, cheerful")).toEqual([
      "happy",
      "cheerful",
    ]);
  });

  it("handles flexible comma spacing", () => {
    expect(parseSynonymInput("one,two, three")).toEqual(["one", "two", "three"]);
  });
});

describe("mergeSynonymLists", () => {
  it("merges lists and excludes the target word", () => {
    expect(mergeSynonymLists(["a", "b"], ["b", "c"], "b")).toEqual([
      "a",
      "c",
    ]);
  });
});

describe("dedupeSynonyms", () => {
  it("removes duplicates and empty values", () => {
    expect(dedupeSynonyms(["a", "A", "", "b", "b"])).toEqual(["a", "b"]);
  });
});
