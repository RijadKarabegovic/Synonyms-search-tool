import {
  EnrichedSynonymResult,
  SynonymError,
  SynonymSource,
  TaggedSynonym,
} from "../types";
import { dedupeSynonyms, normalizeWord } from "../utils/synonymUtils";
import { fetchOnlineSynonyms } from "./datamuseService";
import { fetchStaticSynonyms } from "./staticSynonymService";
import { isFirebaseConfigured } from "../config/firebase";
import {
  clearSynonymCache,
  fetchSynonyms as fetchCommunitySynonyms,
} from "./synonymService";

const enrichedCache = new Map<string, EnrichedSynonymResult>();

function buildTaggedResult(
  word: string,
  bySource: Record<SynonymSource, string[]>
): EnrichedSynonymResult {
  const tagMap = new Map<string, Set<SynonymSource>>();

  for (const source of Object.keys(bySource) as SynonymSource[]) {
    for (const synonym of bySource[source]) {
      if (!tagMap.has(synonym)) {
        tagMap.set(synonym, new Set());
      }
      tagMap.get(synonym)?.add(source);
    }
  }

  const synonyms: TaggedSynonym[] = [...tagMap.entries()]
    .map(([synonymWord, sources]) => ({
      word: synonymWord,
      sources: [...sources],
    }))
    .sort((a, b) => a.word.localeCompare(b.word));

  return {
    word,
    synonyms,
    bySource,
    totalCount: synonyms.length,
  };
}

async function safeCommunityLookup(word: string): Promise<string[]> {
  if (!isFirebaseConfigured()) {
    return [];
  }

  try {
    return await fetchCommunitySynonyms(word);
  } catch (error) {
    if (error instanceof SynonymError && error.code === "NOT_FOUND") {
      return [];
    }
    throw error;
  }
}

export async function fetchEnrichedSynonyms(
  word: string
): Promise<EnrichedSynonymResult> {
  const normalized = normalizeWord(word);
  if (!normalized) {
    throw new SynonymError("EMPTY_WORD");
  }

  const cached = enrichedCache.get(normalized);
  if (cached) {
    return cached;
  }

  const [communityResult, dictionaryResult, onlineResult] =
    await Promise.allSettled([
      safeCommunityLookup(normalized),
      fetchStaticSynonyms(normalized),
      fetchOnlineSynonyms(normalized),
    ]);

  if (communityResult.status === "rejected") {
    throw communityResult.reason;
  }

  const community = dedupeSynonyms(communityResult.value);
  const dictionary =
    dictionaryResult.status === "fulfilled" ? dictionaryResult.value : [];
  const online = onlineResult.status === "fulfilled" ? onlineResult.value : [];

  const communitySet = new Set(community);
  const dictionaryOnly = dictionary.filter((item) => !communitySet.has(item));
  const known = new Set([...community, ...dictionaryOnly]);
  const onlineOnly = online.filter((item) => !known.has(item));

  const bySource: Record<SynonymSource, string[]> = {
    community,
    dictionary: dictionaryOnly,
    online: onlineOnly,
  };

  const totalCount =
    bySource.community.length +
    bySource.dictionary.length +
    bySource.online.length;

  if (totalCount === 0) {
    throw new SynonymError("NOT_FOUND");
  }

  const result = buildTaggedResult(normalized, bySource);
  enrichedCache.set(normalized, result);
  return result;
}

export function clearEnrichedSynonymCache(): void {
  enrichedCache.clear();
  clearSynonymCache();
}

export { clearSynonymCache } from "./synonymService";
export {
  addWordWithSynonyms,
  getSynonymErrorMessage,
} from "./synonymService";
