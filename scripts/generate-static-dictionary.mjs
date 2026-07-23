/**
 * Generates a compact static synonym dictionary for the browser.
 * Source: npm "synonyms" package (WordNet-derived, ~12k headwords).
 *
 * Run: node scripts/generate-static-dictionary.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import synonyms from "synonyms";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, "../public/data");
const outputPath = join(outputDir, "synonyms.json");

const dictionary = synonyms.dictionary;
const flat = {};

for (const [word, posMap] of Object.entries(dictionary)) {
  const merged = new Set();

  for (const list of Object.values(posMap)) {
    if (!Array.isArray(list)) continue;
    for (const synonym of list) {
      if (synonym !== word) {
        merged.add(synonym);
      }
    }
  }

  if (merged.size > 0) {
    flat[word] = [...merged].sort();
  }
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, JSON.stringify(flat));

console.log(
  `Wrote ${Object.keys(flat).length} entries to public/data/synonyms.json`
);
