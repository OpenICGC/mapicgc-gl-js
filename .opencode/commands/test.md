---
description: Run the relevant Vitest suites (library and/or MCP)
---

Run the project tests.

Arguments: `$ARGUMENTS` (optional file, directory, or name pattern).

1. If arguments are given, run `npx vitest run $ARGUMENTS`.
2. Otherwise run `npx vitest run` for the library suite and
   `npm run test:mcp` for the MCP suite.
3. Report the failing files with file and line references, plus the smallest
   useful excerpt of the failure.
4. Do not weaken or delete assertions to make a test pass unless the test itself
   is demonstrably wrong; explain any test change you make.
