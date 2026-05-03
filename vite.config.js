import { resolve } from 'node:path';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: false })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rolldownOptions: {
      external: [
        /^node:/,
        /^@typescript-eslint/,
        /eslint-plugin/,
        /eslint-parser/,
        'globals',
      ],
    },
  },
});
