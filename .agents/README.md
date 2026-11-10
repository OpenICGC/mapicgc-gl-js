# Vendored MapLibre agent skills

These skills come from the community-maintained
[`maplibre/maplibre-agent-skills`](https://github.com/maplibre/maplibre-agent-skills)
repository (MIT licence, see `skills/LICENSE` and `skills/NOTICE`). They are
vendored here so contributors get MapLibre-specific guidance without a network
dependency, and OpenCode discovers them automatically from `.agents/skills/`.

## Included

| Skill | Why it is useful here |
| --- | --- |
| `maplibre-cartography` | Label legibility, figure-ground, layer ordering and accessibility for ICGC basemaps. |
| `maplibre-fonts-glyphs` | `glyphs` URL configuration, font PBFs and the GL JS local-font fallback. |
| `maplibre-source-wiring` | Debugging sources that do not render, `source-layer` matching and `setFeatureState`. |
| `maplibre-sprites-icons` | `sprite` URL forms, `addImage`/`addSprite` and missing-icon diagnosis. |
| `maplibre-terrain-rendering` | Hillshade, `color-relief`, contours and 3D terrain (used by the relief/3D styles). |
| `maplibre-tile-sources` | Choosing between GeoJSON, vector and raster tiles for a dataset. |
| `maplibre-v6-migration` | The project runs on MapLibre GL JS 6.x: ESM-only, `setWorkerUrl()` and API changes. |
| `maplibre-pmtiles-patterns` | Static/serverless tile hosting, cross-referenced by the source skills. |
| `maplibre-mapbox-migration` | Mapbox-to-MapLibre equivalences, cross-referenced by the tile skill. |

Not vendored: `maplibre-running-evals`, `maplibre-skill-authoring` (meta skills
for maintaining the upstream collection), `maplibre-native-gl-js-parity` (this
project only targets GL JS), and the non-MapLibre `svelte-code-writer`,
`frontend-design` and `accessibility` skills (no Svelte here; accessibility is
already covered by `maplibre-cartography`).

## Updating

Re-download the `SKILL.md` of each directory from
`https://raw.githubusercontent.com/maplibre/maplibre-agent-skills/main/skills/<name>/SKILL.md`,
or run the upstream installer:

```bash
npx skills add maplibre/maplibre-agent-skills
```

Project-specific skills (this repository's own workflows) live in
`.opencode/skills/`, not here.
