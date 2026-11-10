---
description: Prepare a release (version + changelog + validation) without publishing
---

Prepare a release of `mapicgc-gl-js`. Target version: `$ARGUMENTS` (leave empty
to propose the next semver from the changes).

1. Read `package.json`, the top of `CHANGELOG.md`, `git log --oneline -20` and
   the existing tags.
2. Propose the version bump (patch / minor / major) with a one-paragraph
   justification. Wait for my confirmation before editing files.
3. After confirmation:
   - bump `version` in `package.json`;
   - add a `## x.y.z` section to `CHANGELOG.md` using the existing headings;
   - bump `SERVER_VERSION` in `mcp/src/server.ts` only if the MCP contract
     changed.
4. Run the same validation as `prepublishOnly`:
   `npm run build:content && npm run build:mcp && npm run build`, then
   `npx vitest run` and `npm run test:mcp`.
5. Summarize the diff, artifact sizes and the exact manual steps left for the
   maintainer (commit, tag, GitHub release).

Never run `npm publish`, `npm run publish`, `npm run publishBeta`, `git tag`,
`git push`, or create a GitHub release.
