/**
 * Loads and indexes everything under `content/` so the MCP tools can search
 * and retrieve documentation without any external dependency.
 *
 * The content tree is simple:
 *   content/README.md          -> synced from mapicgc-gl-js (npm run sync)
 *   content/docu_Map.md        -> synced JSDoc reference of the `Map` class
 *   content/CHANGELOG.md       -> synced changelog
 *   content/config-snapshot.json -> synced fallback copy of the ICGC config JSON
 *   content/examples/*.md      -> hand-written usage examples (not synced)
 */
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// Source tests run from the repository root; the bundled CJS executable has __dirname.
function resolveModuleDir(): string {
  if (typeof __dirname !== "undefined") return __dirname;
  return path.resolve(process.cwd(), "mcp", "src");
}
const MODULE_DIR: string = resolveModuleDir();

/**
 * CONTENT_DIR has two possible layouts depending on how this module runs:
 *  - Bundled (published package): dist-mcp/index.js sits at the package root,
 *    content/ lives at mcp/content/ -> "../mcp/content" from __dirname.
 *  - Source (dev/tests via tsc or vitest): this file is mcp/src/content.ts,
 *    content/ lives at mcp/content/ -> "../content" from __dirname.
 * Pick whichever candidate actually exists on disk.
 */
function resolveContentDir(): string {
  const bundledLayout = path.resolve(MODULE_DIR, "..", "mcp", "content");
  const sourceLayout = path.resolve(MODULE_DIR, "..", "content");
  return existsSync(bundledLayout) ? bundledLayout : sourceLayout;
}

export const CONTENT_DIR = resolveContentDir();

export interface Section {
  /** Relative path of the source file, e.g. "docu_Map.md" or "examples/basic-map.md". */
  source: string;
  /** Heading text for this section ("" for content before the first heading). */
  heading: string;
  /** Raw heading level (1-6), 0 if there was no heading. */
  level: number;
  /** Body text of the section (without the heading line). */
  text: string;
}

interface ContentIndex {
  sections: Section[];
  loadedAt: number;
}

let cache: ContentIndex | null = null;

/** Splits a markdown document into sections, one per heading (## ...). */
function splitIntoSections(source: string, markdown: string): Section[] {
  const lines = markdown.split(/\r?\n/);
  const sections: Section[] = [];
  let currentHeading = "";
  let currentLevel = 0;
  let buffer: string[] = [];

  const flush = () => {
    const text = buffer.join("\n").trim();
    if (text.length > 0 || currentHeading) {
      sections.push({ source, heading: currentHeading, level: currentLevel, text });
    }
    buffer = [];
  };

  // jsdoc2md inserts a bare `<a name="...">` anchor right before each heading;
  // drop those lines so they don't leak into the *previous* section's body text.
  const isBareAnchorLine = (line: string) => /^\s*<a\s+name="[^"]*"\s*>\s*<\/a>\s*$/i.test(line);

  for (const line of lines) {
    const match = /^(#{1,6})\s+(.*)$/.exec(line);
    if (match) {
      flush();
      currentLevel = match[1].length;
      currentHeading = match[2].replace(/<a\s+name="[^"]*"\s*>\s*<\/a>/gi, "").trim();
    } else if (!isBareAnchorLine(line)) {
      buffer.push(line);
    }
  }
  flush();

  return sections.filter((s) => s.text.length > 0 || s.heading.length > 0);
}

async function listMarkdownFiles(dir: string, baseDir: string): Promise<string[]> {
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(full, baseDir)));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(path.relative(baseDir, full).split(path.sep).join("/"));
    }
  }
  return files;
}

/** Builds (or returns the cached) in-memory index of every markdown file under content/. */
export async function loadIndex(): Promise<ContentIndex> {
  if (cache) return cache;

  const relativeFiles = await listMarkdownFiles(CONTENT_DIR, CONTENT_DIR);
  const sections: Section[] = [];

  for (const relativeFile of relativeFiles) {
    const fullPath = path.join(CONTENT_DIR, relativeFile);
    try {
      const raw = await readFile(fullPath, "utf8");
      sections.push(...splitIntoSections(relativeFile, raw));
    } catch {
      // Skip unreadable files instead of crashing the whole index.
    }
  }

  cache = { sections, loadedAt: Date.now() };
  return cache;
}

/** Forces re-reading content/ from disk on the next call (used by tests). */
export function clearCache(): void {
  cache = null;
}

export interface SearchResult extends Section {
  score: number;
  snippet: string;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .match(/[a-z0-9]+/g) ?? [];
}

function buildSnippet(text: string, terms: string[], maxLength = 320): string {
  const lower = text.toLowerCase();
  let bestIndex = 0;
  for (const term of terms) {
    const idx = lower.indexOf(term);
    if (idx !== -1) {
      bestIndex = Math.max(0, idx - 80);
      break;
    }
  }
  const snippet = text.slice(bestIndex, bestIndex + maxLength).trim();
  return (bestIndex > 0 ? "… " : "") + snippet + (bestIndex + maxLength < text.length ? " …" : "");
}

/**
 * Very small text search: scores each section by counting how many times the
 * query terms appear (headings weigh more than body text). No external deps.
 */
export async function searchDocs(query: string, limit = 5): Promise<SearchResult[]> {
  const { sections } = await loadIndex();
  const terms = tokenize(query);
  if (terms.length === 0) return [];

  const results: SearchResult[] = [];
  for (const section of sections) {
    const headingTokens = tokenize(section.heading);
    const bodyTokens = tokenize(section.text);
    let score = 0;
    for (const term of terms) {
      const headingHits = headingTokens.filter((t) => t === term || t.startsWith(term)).length;
      const bodyHits = bodyTokens.filter((t) => t === term).length;
      score += headingHits * 5 + bodyHits;
    }
    if (score > 0) {
      results.push({ ...section, score, snippet: buildSnippet(section.text || section.heading, terms) });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, Math.max(1, limit));
}

/**
 * Looks up documentation for a specific method/class name (e.g. "addMarker"
 * or "Map.addMarker") inside the synced docu_Map.md reference.
 */
export async function getApiDoc(name: string): Promise<Section | null> {
  const { sections } = await loadIndex();
  const normalized = name.trim().toLowerCase().replace(/^map\./, "").replace(/\(.*$/, "");

  const candidates = sections.filter((s) => s.source === "docu_Map.md" && s.heading);

  const stripSignature = (heading: string) =>
    heading
      .replace(/\\_/g, "_")
      .replace(/\(.*$/, "")
      .replace(/[⇒→].*$/, "")
      .trim()
      .toLowerCase();

  let match = candidates.find((s) => stripSignature(s.heading) === normalized);
  if (!match) {
    match = candidates.find((s) => stripSignature(s.heading).startsWith(normalized));
  }
  if (!match) {
    match = candidates.find((s) => stripSignature(s.heading).includes(normalized));
  }
  return match ?? null;
}

/** Lists every example file under content/examples with its title (first heading). */
export async function listExamples(): Promise<{ file: string; title: string }[]> {
  const { sections } = await loadIndex();
  const seen = new Map<string, string>();
  for (const s of sections) {
    if (s.source.startsWith("examples/") && !seen.has(s.source) && s.heading) {
      seen.set(s.source, s.heading);
    }
  }
  return Array.from(seen.entries()).map(([file, title]) => ({ file, title }));
}

/** Finds the example file whose name/title best matches the requested topic. */
export async function getExample(topic: string): Promise<{ file: string; text: string } | null> {
  const { sections } = await loadIndex();
  const exampleSections = sections.filter((s) => s.source.startsWith("examples/"));
  if (exampleSections.length === 0) return null;

  const terms = tokenize(topic);
  const bySource = new Map<string, Section[]>();
  for (const s of exampleSections) {
    const list = bySource.get(s.source) ?? [];
    list.push(s);
    bySource.set(s.source, list);
  }

  let best: { file: string; score: number } | null = null;
  for (const [file, secs] of bySource) {
    const fileTokens = tokenize(file + " " + secs.map((s) => s.heading).join(" "));
    const bodyTokens = tokenize(secs.map((s) => s.text).join(" "));
    let score = 0;
    for (const term of terms) {
      score += fileTokens.filter((t) => t === term || t.startsWith(term)).length * 5;
      score += bodyTokens.filter((t) => t === term).length;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { file, score };
    }
  }

  if (!best) return null;
  const fullPath = path.join(CONTENT_DIR, best.file);
  const text = await readFile(fullPath, "utf8");
  return { file: best.file, text };
}

/** Returns the full CHANGELOG, or just the section for one version. */
export async function getChangelog(version?: string): Promise<string | null> {
  const fullPath = path.join(CONTENT_DIR, "CHANGELOG.md");
  if (!existsSync(fullPath)) return null;
  const raw = await readFile(fullPath, "utf8");
  if (!version) return raw;

  // Changelogs nest sub-headings (### Features, ### Bug fixes) under each
  // version's "## x.y.z" heading, so we can't reuse the flat section index
  // here: we need everything up to the *next* top-level ("## ") heading.
  const normalized = version.trim().replace(/^v/i, "");
  const lines = raw.split(/\r?\n/);
  let collecting = false;
  const collected: string[] = [];

  for (const line of lines) {
    const topLevelMatch = /^##\s+v?(.+?)\s*$/.exec(line);
    if (topLevelMatch) {
      if (collecting) break; // Reached the next version entry.
      if (topLevelMatch[1].trim() === normalized) {
        collecting = true;
        collected.push(`## ${topLevelMatch[1].trim()}`);
        continue;
      }
    }
    if (collecting) collected.push(line);
  }

  const text = collected.join("\n").trim();
  return text.length > 0 ? text : null;
}

/** Reads a top-level content file as-is (e.g. "README.md"). */
export async function readContentFile(relativePath: string): Promise<string | null> {
  const fullPath = path.join(CONTENT_DIR, relativePath);
  if (!existsSync(fullPath)) return null;
  return readFile(fullPath, "utf8");
}
