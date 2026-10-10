import { beforeEach, describe, expect, it, vi } from "vitest";
import { SynonymError } from "../types";

const mockGetDoc = vi.fn();
const mockWriteBatch = vi.fn();

vi.mock("firebase/firestore", () => ({
  doc: (_db: unknown, _collection: string, id: string) => ({ id }),
  getDoc: (...args: unknown[]) => mockGetDoc(...args),
  writeBatch: (...args: unknown[]) => mockWriteBatch(...args),
}));

vi.mock("../config/firebase", () => ({
  getDb: () => ({}),
  isFirebaseConfigured: () => true,
}));

import {
  addWordWithSynonyms,
  clearSynonymCache,
  fetchSynonyms,
  getSynonymErrorMessage,
} from "../services/synonymService";

function createBatchMock() {
  return {
    set: vi.fn(),
    update: vi.fn(),
    commit: vi.fn().mockResolvedValue(undefined),
  };
}

describe("synonymService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    clearSynonymCache();
    mockWriteBatch.mockReturnValue(createBatchMock());
  });

  it("throws when searching for an empty word", async () => {
    await expect(fetchSynonyms("   ")).rejects.toMatchObject({
      code: "EMPTY_WORD",
    });
  });

  it("throws when word is not found", async () => {
    mockGetDoc.mockResolvedValueOnce({ exists: () => false });
    await expect(fetchSynonyms("missing")).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
  });

  it("returns synonyms for an existing word", async () => {
    mockGetDoc.mockResolvedValueOnce({
      exists: () => true,
      data: () => ({ synonyms: ["joyful", "cheerful"] }),
    });

    await expect(fetchSynonyms("happy")).resolves.toEqual([
      "joyful",
      "cheerful",
    ]);
  });

  it("uses cache on repeated searches", async () => {
    mockGetDoc.mockResolvedValue({
      exists: () => true,
      data: () => ({ synonyms: ["a"] }),
    });

    await fetchSynonyms("cached");
    await fetchSynonyms("cached");

    expect(mockGetDoc).toHaveBeenCalledTimes(1);
  });

  it("throws when adding a word that already exists", async () => {
    mockGetDoc.mockResolvedValueOnce({
      exists: () => true,
      data: () => ({ synonyms: ["a"] }),
    });

    await expect(addWordWithSynonyms("happy", "joyful")).rejects.toMatchObject({
      code: "WORD_EXISTS",
    });
  });

  it("throws when synonym input is empty", async () => {
    mockGetDoc.mockResolvedValueOnce({ exists: () => false });

    await expect(addWordWithSynonyms("happy", "   ")).rejects.toMatchObject({
      code: "EMPTY_SYNONYMS",
    });
  });

  it("maps error codes to user-friendly messages", () => {
    expect(getSynonymErrorMessage("NOT_FOUND")).toContain("not found");
    expect(getSynonymErrorMessage("WORD_EXISTS")).toContain("already exists");
  });

  it("creates a synonym cluster for new words", async () => {
    mockGetDoc
      .mockResolvedValueOnce({ exists: () => false })
      .mockResolvedValueOnce({ exists: () => false })
      .mockResolvedValueOnce({ exists: () => false });

    const batch = createBatchMock();
    mockWriteBatch.mockReturnValue(batch);

    await addWordWithSynonyms("happy", "joyful, cheerful");

    expect(batch.set).toHaveBeenCalled();
    expect(batch.commit).toHaveBeenCalled();
  });

  it("throws SynonymError instances", () => {
    expect(new SynonymError("NOT_FOUND")).toBeInstanceOf(SynonymError);
  });
});
