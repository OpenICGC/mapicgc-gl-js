# AGENTS.md

Guidance for AI agents working in this repository. Read it before making changes.

## What this project is

`mapicgc-gl-js` is the ICGC (Institut Cartogràfic i Geològic de Catalunya) wrapper
around MapLibre GL JS 6.x. It has three parts:

- `src/` — the browser library, written as ES modules. `src/index.js` exports
  `Map`, `CompareMaps` and `Config`, plus the whole `maplibregl` namespace.
  `Map` composes a `maplibregl.Map` instance as `this.map` and exposes ~150
  delegated methods plus ICGC-specific helpers and controls (geocoder,
  territorial lookup, logo, legend, 3D toggle, mouse coordinates, export).
- `mcp/` — a TypeScript stdio MCP server (`mapicgc-mcp`) that serves this
  library's docs, API reference, examples, styles and changelog to AI clients.
  It is bundled with esbuild into `dist-mcp/index.js` and shipped inside the npm
  package.
- `test/vitest/` — Vitest suites for the library. `mcp/test/` — Vitest suites
  for the MCP content/search helpers.

## Setup and commands

Node 20+ and npm are expected.

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Vite dev server |
| `npm run test` | Vitest in watch mode |
| `npx vitest run` | One-shot run of the library tests |
| `npx vitest run test/vitest/MapFunctions.test.js` | Run a single suite |
| `npm run build` | Build `dist/mapicgc-gl.js` (UMD) and `dist/mapicgc-gl.mjs` (ESM) |
| `npm run build:content` | Download README/docu_Map/CHANGELOG into `mcp/content/` |
| `npm run build:mcp` | Type-check `mcp/src` with `tsc` and bundle `dist-mcp/index.js` |
| `npm run test:mcp` | Run the MCP tests |
| `npm run prepublishOnly` | `build:content` + `build:mcp` + `build` |
| `node mcp/scripts/smoke-test.js` | End-to-end MCP stdio check (requires `dist-mcp/`) |
| `npm run setConfig` | Regenerate `src/config*.js` and `src/constants/*` from the remote ICGC config (maintainer-only, needs `.env`) |

Publishing (`npm publish`, `npm run publishBeta`) is a maintainer action driven
by CI. Never publish, tag or create a GitHub release without explicit
confirmation.

## Repository layout

```text
src/
  index.js              public entry point and ESM exports
  map/Map.js            main wrapper class (delegates to this.map)
  constants/            ConfigICGC, Styles, Terrains, Layers, Legends
  controls/             map controls
  plugins/              CompareMaps and the bundled geocoder
  territorial/          ICGC territorial API helpers
  config.js             generated config used by the browser build
  configNode.js         generated Node-side config
  config-out.js         generated config variant
  mapicgc-config.json   local fallback when the remote config is unreachable
mcp/
  src/                  MCP server (server.ts + tools/*.ts)
  content/              generated docs consumed by the MCP server
  scripts/              sync.js, build-mcp.mjs, smoke-test.js
  test/                 MCP unit tests
test/vitest/            library tests
```

## Conventions

- 2-space indentation, double quotes, semicolons.
- `src/` is ESM even though `package.json` declares `"type": "commonjs"`; Vite
  handles the library build. Do not "fix" this without checking both builds.
- Code comments are Catalan or Spanish, often explaining ICGC-specific quirks.
  Keep new comments in the same tone; public JSDoc and user-facing docs are in
  English.
- New public API must be exported from `src/index.js` and documented with JSDoc
  (it feeds `docu_Map.md`). Keep the UMD global name `mapicgcgl`.
- User-visible changes get an entry in `CHANGELOG.md` following the existing
  `## x.y.z` / `### Added` structure.

## Generated files — do not hand-edit

- `dist/`, `dist-mcp/` — build output.
- `mcp/content/` — produced by `npm run build:content` from upstream docs.
- `src/config.js`, `src/configNode.js`, `src/config-out.js`,
  `src/constants/Styles.js`, `Terrains.js`, `Layers.js` — rewritten by
  `npm run setConfig`. Change `src/mapicgc-config.json` (fallback) or the
  generator when a data change is really intended.

## Gotchas

- `src/index.js` calls `maplibre-gl`'s `setWorkerUrl()` before any map is
  created. Removing it makes maps hang on load without an error.
- `maplibre-gl` must resolve to a single physical instance. `vite.config.mjs`
  uses `dedupe: ['maplibre-gl']`; do not remove it or add a second copy.
- The `Map` constructor fetches the remote config asynchronously and falls back
  to `src/mapicgc-config.json`. Code and tests must work offline.
- The MCP bundle is CommonJS targeting Node 18+; `mcp/src` is TS checked by
  `tsc --noEmit` inside `build:mcp`.
- `test/vitest` mocks network/config calls. Prefer mocking over hitting ICGC
  services in tests.

## Change checklist

1. Tests: add/update `test/vitest/*.test.js` or `mcp/test/*.test.ts`.
2. Run `npx vitest run` and `npm run test:mcp`.
3. Run `npm run build` (and `npm run build:mcp` if `mcp/` changed).
4. Update `CHANGELOG.md` for user-visible changes.
5. If the public API or examples changed, refresh `mcp/content/`.
