---
description: Build, test and smoke-test the mapicgc-mcp server
---

Verify the MCP server end to end:

1. `npm run build:content`
2. `npm run test:mcp`
3. `npm run build:mcp`
4. `node mcp/scripts/smoke-test.js`

Report:
- the tools, resources and prompts the smoke test exercised, and whether each
  passed;
- any type error from `tsc` (the build stops before bundling if it fails);
- the size of `dist-mcp/index.js`.

If a step fails, stop and explain the failure instead of skipping ahead.
