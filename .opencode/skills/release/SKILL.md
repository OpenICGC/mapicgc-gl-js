---
name: MapICGC Release
description: Prepare a version bump, changelog entry and pre-publish validation for mapicgc-gl-js. Never publishes.
---

# MapICGC GL JS release preparation

Use this skill when the user asks to prepare, cut or document a release.

## Workflow

1. Read `package.json` (`version`), `CHANGELOG.md` (top section) and the recent
   history: `git log --oneline -20` and `git tag --sort=-v:refname | head`.
2. Decide the semver bump (patch / minor / major) from the actual changes and
   explain the reasoning. The user must confirm before files change.
3. After confirmation:
   - Bump `version` in `package.json`.
   - Add a new `## x.y.z` section at the top of `CHANGELOG.md`, following the
     existing headings (`### Added`, `### ✨ Features and improvements`,
     `### 🐞 Bug fixes`).
   - If the MCP contract changed, bump `SERVER_VERSION` in `mcp/src/server.ts`.
4. Validate exactly what `prepublishOnly` runs:
   - `npm run build:content`
   - `npm run build:mcp`
   - `npm run build`
5. Run the test suites: `npx vitest run` and `npm run test:mcp`.
6. Report the diff, the generated artifact sizes, and the remaining manual
   steps (commit, tag, GitHub release).

## Rules

- Never run `npm publish`, `npm run publish`, `npm run publishBeta`, `git tag`,
  `git push` or create a GitHub release. CI publishes when a release is created.
- Do not commit `dist/`, `dist-mcp/` or `mcp/content/` unless the repository
  explicitly tracks them; they are build output.
- If `npm run build:content` fails because upstream is unreachable, stop and
  report it instead of shipping stale content.
