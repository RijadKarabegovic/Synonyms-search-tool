import { beforeEach, describe, expect, it, vi } from "vitest";
import { SynonymError } from "../types";

vi.mock("./synonymService", () => ({
  fetchSynonyms: vi.fn(),
  clearSynonymCache: vi.fn(),
  addWordWithSynonyms: vi.fn(),
  getSynonymErrorMessage: vi.fn(),
}));

vi.mock("./staticSynonymService", () => ({
  fetchStaticSynonyms: vi.fn(),
}));

vi.mock("./datamuseService", () => ({
  fetchOnlineSynonyms: vi.fn(),
}));

import { fetchSynonyms as fetchCommunitySynonyms } from "./synonymService";
import { fetchStaticSynonyms } from "./staticSynonymService";
import { fetchOnlineSynonyms } from "./datamuseService";
import {
  clearEnrichedSynonymCache,
  fetchEnrichedSynonyms,
} from "./enrichedSynonymService";

describe("enrichedSynonymService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearEnrichedSynonymCache();
  });

  it("merges community, dictionary, and online sources without duplicates", async () => {
    vi.mocked(fetchCommunitySynonyms).mockResolvedValue(["custom"]);
    vi.mocked(fetchStaticSynonyms).mockResolvedValue(["custom", "joyful"]);
    vi.mocked(fetchOnlineSynonyms).mockResolvedValue([
      "custom",
      "joyful",
      "euphoric",
    ]);

    const result = await fetchEnrichedSynonyms("happy");

    expect(result.bySource.community).toEqual(["custom"]);
    expect(result.bySource.dictionary).toEqual(["joyful"]);
    expect(result.bySource.online).toEqual(["euphoric"]);
    expect(result.totalCount).toBe(3);
  });

  it("throws NOT_FOUND when every source is empty", async () => {
    vi.mocked(fetchCommunitySynonyms).mockRejectedValue(
      new SynonymError("NOT_FOUND")
    );
    vi.mocked(fetchStaticSynonyms).mockResolvedValue([]);
    vi.mocked(fetchOnlineSynonyms).mockResolvedValue([]);

    await expect(fetchEnrichedSynonyms("missingword")).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
  });

  it("still returns dictionary results when community data is missing", async () => {
    vi.mocked(fetchCommunitySynonyms).mockRejectedValue(
      new SynonymError("NOT_FOUND")
    );
    vi.mocked(fetchStaticSynonyms).mockResolvedValue(["joyful"]);
    vi.mocked(fetchOnlineSynonyms).mockResolvedValue([]);

    const result = await fetchEnrichedSynonyms("happy");
    expect(result.bySource.dictionary).toEqual(["joyful"]);
    expect(result.totalCount).toBe(1);
  });
});
