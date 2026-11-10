---
description: Build the library and verify the generated bundles
---

Build `mapicgc-gl-js` and verify the output.

Arguments: `$ARGUMENTS` (optional; `mcp` or `all` to include the MCP bundle).

1. Run `npm run build`.
2. Confirm that `dist/mapicgc-gl.js` (UMD) and `dist/mapicgc-gl.mjs` (ESM) were
   produced, and report their sizes.
3. If arguments include `mcp` or `all`, also run `npm run build:content` and
   `npm run build:mcp`, then confirm `dist-mcp/index.js` exists.
4. Report warnings and errors verbatim. Do not commit `dist/`, `dist-mcp/` or
   `mcp/content/`.
