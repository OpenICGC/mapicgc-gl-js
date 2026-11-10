---
name: MapICGC MCP Server
description: Add or modify tools, resources, prompts, bundled content, tests or the build of the mapicgc-mcp server in mcp/.
---

# MapICGC MCP server

Use this skill when a task touches `mcp/` (TypeScript MCP server), the bundled
docs in `mcp/content/`, or the published `mapicgc-mcp` bin.

## Architecture

- `mcp/src/index.ts` — stdio entry point (also keeps the shebang used by the
  bundled output).
- `mcp/src/server.ts` — creates the `McpServer` and registers every tool,
  resource and prompt. It is transport-agnostic; `mcp/src/http.ts` exists but is
  not wired into the current build.
- `mcp/src/tools/*.ts` — one file per tool, each exporting a `registerX(server)`
  function with a zod input schema.
- `mcp/src/content.ts` — reads files from `mcp/content/`.
- `mcp/content/` — generated: README, `docu_Map.md`, `CHANGELOG.md` and
  `config-snapshot.json`, downloaded by `mcp/scripts/sync.js`.
- `mcp/scripts/build-mcp.mjs` — type-checks with `tsc --noEmit`, then bundles to
  `dist-mcp/index.js` (CJS, Node 18+).

## Workflow

1. Read `AGENTS.md` and `mcp/src/server.ts`.
2. Implement the tool in `mcp/src/tools/`, following the existing naming and
   registration pattern. Use zod for inputs and return MCP content blocks.
3. Register it in `createServer()` in `mcp/src/server.ts`.
4. Content must come from `mcp/content/` via `readContentFile`. If a file is
   missing, return an actionable message telling the user to run
   `npm run build:content`; do not silently invent data.
5. Add or update tests in `mcp/test/` (see `content.test.ts`,
   `search.test.ts`).
6. Run:
   - `npm run build:content`
   - `npm run test:mcp`
   - `npm run build:mcp`
   - `node mcp/scripts/smoke-test.js`
7. Update the MCP tools table in `README.md`, and `mcp/PROMPTS.md` if a prompt
   changes.

## Rules

- Never hand-edit `mcp/content/` or `dist-mcp/`; both are generated.
- Keep the bundle self-contained: `@modelcontextprotocol/sdk` and `zod` are
  devDependencies bundled into `dist-mcp/index.js`, so consumers do not install
  them.
- The server version is `SERVER_VERSION` in `mcp/src/server.ts`, independent of
  `package.json`. Bump it when the MCP contract changes.
- Do not add a network dependency at tool-call time beyond what already exists
  (`listStyles` has an explicit local fallback).
