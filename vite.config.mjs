import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
   },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.json'], // Asegúrate de que Vitest pueda resolver módulos ESM.
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
        nodePolyfills({
          protocolImports: true,
        }),
        babel({ babelHelpers: 'bundled' }),
      ],
     
    },
  },
});
