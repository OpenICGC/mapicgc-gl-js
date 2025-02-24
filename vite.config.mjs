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
    'process.env': {}
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    minify: true,
    lib: {
      entry: 'src/index.js',
      fileName: 'mapicgc-gl',
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
