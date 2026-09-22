import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
//import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  // Sense això, Vite emet les URLs dels assets (com el worker de
  // maplibre-gl via `?worker&url`) com a rutes absolutes des de l'arrel
  // del lloc (`/assets/...`). Com que mapicgc-gl-js és una llibreria que
  // es pot servir des de qualsevol subcarpeta (no necessàriament l'arrel
  // del domini), calen rutes relatives a la ubicació real del bundle.
  base: './',
  test: {
    globals: true,
    environment: 'node',
   },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.json'], // Asegúrate de que Vitest pueda resolver módulos ESM.
    // maplibre-gl v6 es ESM-only. Si @watergis/maplibre-gl-export,
    // @maplibre/maplibre-gl-geocoder o @maplibre/maplibre-gl-compare aún
    // hacen un require('maplibre-gl') de estilo CJS internamente, el plugin
    // commonjs puede acabar creando una segunda "copia" del módulo (con su
    // propia clase Map) distinta de la que usa Map.js. dedupe fuerza a Vite/
    // Rollup a resolver siempre la MISMA instancia física del paquete.
    dedupe: ['maplibre-gl'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': {},
    'process.platform': JSON.stringify(''),
    'process.version': JSON.stringify(''),
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    minify: true,
    lib: {
      entry: 'src/index.js',
      // Emit ES as .mjs and UMD as .js so consumers can reference
      // `dist/mapicgc-gl.mjs` (ESM) and `dist/mapicgc-gl.js` (UMD)
      fileName: (format) => format === 'es' ? 'mapicgc-gl.mjs' : 'mapicgc-gl.js',
      formats: ['es','umd'],
      name: 'mapicgcgl',
    },
    rollupOptions: {
      plugins: [
       
        babel({ babelHelpers: 'bundled' }),
      ],
     
    },
  },
});