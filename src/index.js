import { setWorkerUrl } from "maplibre-gl";
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import Map from "./map/Map";
import CompareMaps from "./plugins/CompareMaps";
import Config from "./constants/ConfigICGC";

// maplibre-gl v6 és ESM-only. Quan es distribueix a través d'un bundler
// (com aquí, amb `vite build`), `import.meta.url` no resol fiablement la
// ubicació del worker dins del graf de mòduls del bundle final, així que
// cal indicar-li explícitament la URL abans de crear cap mapa. Sense
// això, `new maplibregl.Map(...)` es crea "bé" (canvas, WebGL...) però
// es queda penjat esperant el worker per sempre i "load" no es dispara
// mai, sense llançar cap error visible.
setWorkerUrl(maplibreWorkerUrl);

export { Map, CompareMaps, Config };
// maplibre-gl v6 és ESM-only i ja no publica cap bundle UMD amb un global
// `maplibregl`. Reexportem el seu namespace perquè qualsevol consumidor
// (via import ES module o via el global que exposi el vostre build)
// pugui seguir fent `new maplibregl.NavigationControl()`, etc. sense haver
// de carregar maplibre-gl per separat amb un <script> clàssic.
export * as maplibregl from "maplibre-gl";
