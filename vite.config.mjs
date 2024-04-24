import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  define: {
    'process.env': {}
  },
  build: {
    minify: true,
    lib: {
      entry: 'src/index.js',
      fileName: 'mapicgc-gl',
      formats:['umd'],
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
