#!/usr/bin/env node
/**
 * Downloads the real mapicgc-gl-js documentation and ICGC config into content/,
 * so the MCP server ships fresh, non-invented docs and examples stay in sync
 * with the upstream library. Run with `npm run sync`.
 *
 * Fails loudly (non-zero exit code) if any required download fails, instead
 * of silently shipping stale or missing content.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.resolve(__dirname, "..", "content");
const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

const CONFIG_URL = "https://eines.icgc.cat/recursos/mapicgc-gl-js/mapicgc-config.json";

const DOCS = [
  { file: "README.md", source: "README.md" },
  { file: "docu_Map.md", source: "docu_Map.md" },
  { file: "CHANGELOG.md", source: "CHANGELOG.md" },
];

/**
 * Downloads a URL as text, auto-detecting the encoding from a BOM.
 *
 * Some files in the upstream repo (e.g. docu_Map.md) are committed as
 * UTF-16LE, which `Response#text()` would otherwise mangle (it always
 * assumes UTF-8). We read the raw bytes instead and decode them properly.
 */
async function downloadText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText} per a ${url}`);
  }
  const bytes = new Uint8Array(await response.arrayBuffer());

  if (bytes[0] === 0xff && bytes[1] === 0xfe) {
    return new TextDecoder("utf-16le").decode(bytes.subarray(2));
  }
  if (bytes[0] === 0xfe && bytes[1] === 0xff) {
    return new TextDecoder("utf-16be").decode(bytes.subarray(2));
  }
  if (bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) {
    return new TextDecoder("utf-8").decode(bytes.subarray(3));
  }
  return new TextDecoder("utf-8").decode(bytes);
}

async function readLocalText(file) {
  const bytes = new Uint8Array(await readFile(path.join(PROJECT_ROOT, file)));
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder("utf-16le").decode(bytes.subarray(2));
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder("utf-16be").decode(bytes.subarray(2));
  if (bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf) return new TextDecoder("utf-8").decode(bytes.subarray(3));
  return new TextDecoder("utf-8").decode(bytes);
}

async function main() {
  await mkdir(CONTENT_DIR, { recursive: true });

  const errors = [];

  for (const { file, source } of DOCS) {
    try {
      const text = await readLocalText(source);
      await writeFile(path.join(CONTENT_DIR, file), text, "utf8");
      console.log(`✔ ${file} copiat des de ${source}`);
    } catch (error) {
      errors.push(`✘ No s'ha pogut copiar ${file} des de ${source}: ${error.message}`);
    }
  }

  try {
    const configText = await downloadText(CONFIG_URL);
    // Validate it is actually JSON before writing a snapshot that other tools will trust.
    JSON.parse(configText);
    await writeFile(path.join(CONTENT_DIR, "config-snapshot.json"), configText, "utf8");
    console.log(`✔ config-snapshot.json descarregat des de ${CONFIG_URL}`);
  } catch (error) {
    errors.push(`✘ No s'ha pogut descarregar la configuració ICGC des de ${CONFIG_URL}: ${error.message}`);
  }

  if (errors.length > 0) {
    console.error("\nLa sincronització ha fallat:\n" + errors.join("\n"));
    process.exit(1);
  }

  console.log("\nSincronització completada correctament.");
}

main().catch((error) => {
  console.error("Error inesperat durant la sincronització:", error);
  process.exit(1);
});
