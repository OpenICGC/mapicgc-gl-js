#!/usr/bin/env node
/**
 * Builds the MCP server into a single self-contained CommonJS file at
 * ../dist-mcp/index.js (repo root), so `mapicgc-gl-js` can expose it via its
 * own `bin` entry without requiring consumers to install
 * @modelcontextprotocol/sdk or zod themselves (they are bundled in, and are
 * devDependencies only at the package level).
 *
 * Steps:
 *   1. Type-check mcp/src with tsc --noEmit (esbuild itself does not type-check).
 *   2. Bundle src/index.ts with esbuild into dist-mcp/index.js (CJS, node18+).
 *   3. chmod +x the output on POSIX systems (no-op on Windows).
 */
import { build } from "esbuild";
import { chmod, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mcpDir = path.resolve(__dirname, "..");
const rootDir = path.resolve(mcpDir, "..");
const outDir = path.join(rootDir, "dist-mcp");
const outFile = path.join(outDir, "index.js");

console.log("[build-mcp] Comprovant tipus amb tsc --noEmit...");
// Invoquem el binari de typescript directament amb node (en lloc de
// `npx tsc`): a Windows, spawnSync de fitxers .cmd falla amb EINVAL en
// certes combinacions de Node, i això és més robust en qualsevol SO.
const tscBin = path.join(rootDir, "node_modules", "typescript", "bin", "tsc");
execFileSync(
  process.execPath,
  [tscBin, "-p", path.join(mcpDir, "tsconfig.json"), "--noEmit"],
  { stdio: "inherit", cwd: rootDir }
);

await mkdir(outDir, { recursive: true });

console.log("[build-mcp] Empaquetant amb esbuild...");
await build({
  entryPoints: [path.join(mcpDir, "src", "index.ts")],
  outfile: outFile,
  bundle: true,
  platform: "node",
  format: "cjs",
  target: "node18",
  // No cal `banner`: esbuild ja conserva el shebang de l'entry point
  // (mcp/src/index.ts) com a primera línia de sortida.
  legalComments: "none",
  logLevel: "info",
});

try {
  await chmod(outFile, 0o755);
} catch {
  // Windows: l'atribut d'execució no aplica; npm/npx ja ho gestionen.
}

console.log(`[build-mcp] ✔ Generat ${path.relative(rootDir, outFile)}`);
