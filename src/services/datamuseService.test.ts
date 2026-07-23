import { beforeEach, describe, expect, it, vi } from "vitest";

describe("datamuseService", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("fetches and normalizes online synonyms", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          { word: "joyful", score: 100 },
          { word: "happy", score: 90 },
          { word: "cheerful", score: 80 },
        ],
      })
    );

    const { fetchOnlineSynonyms } = await import("./datamuseService");
    await expect(fetchOnlineSynonyms("happy")).resolves.toEqual([
      "joyful",
      "cheerful",
    ]);
  });
});
