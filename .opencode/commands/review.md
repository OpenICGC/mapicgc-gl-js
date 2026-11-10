---
description: Review pending changes for bugs, missing tests and docs
---

Review the pending changes for `$ARGUMENTS` (defaults to the whole working
tree). Inspect `git status --short` and `git diff HEAD`, including untracked
files.

Focus, in this order:

1. Correctness and regressions in `src/` and `mcp/`.
2. Missing or insufficient tests in `test/vitest/` and `mcp/test/`.
3. Public API impact: exports in `src/index.js`, JSDoc, `docu_Map.md`,
   `README.md`, `CHANGELOG.md`.
4. Generated files edited by mistake: `dist/`, `dist-mcp/`, `mcp/content/`,
   `src/config*.js`, `src/constants/{Styles,Terrains,Layers}.js`.
5. ICGC-specific pitfalls: worker URL, single `maplibre-gl` instance,
   offline config fallback, mocks in tests.

Output findings ordered by severity, each with `file:line` and a concrete fix.
Do not modify any files during the review.
