import { beforeEach, describe, expect, it, vi } from "vitest";
import { clearStaticDictionaryCache } from "./staticSynonymService";

describe("staticSynonymService", () => {
  beforeEach(() => {
    clearStaticDictionaryCache();
    vi.restoreAllMocks();
  });

  it("returns direct synonyms from the static dictionary", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          happy: ["joyful", "cheerful"],
        }),
      })
    );

    const { fetchStaticSynonyms } = await import("./staticSynonymService");
    await expect(fetchStaticSynonyms("happy")).resolves.toEqual([
      "joyful",
      "cheerful",
    ]);
  });

  it("falls back to reverse lookup when the word is not a headword", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          happy: ["joyful", "cheerful"],
        }),
      })
    );

    const { fetchStaticSynonyms } = await import("./staticSynonymService");
    await expect(fetchStaticSynonyms("joyful")).resolves.toEqual([
      "happy",
      "cheerful",
    ]);
  });
});
