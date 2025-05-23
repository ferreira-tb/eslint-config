import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: false })],
  build: {
    outDir: 'dist',
    target: 'esnext',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [/^node:/, /^@typescript-eslint/, /eslint-plugin/, /eslint-parser/, 'globals'],
    },
  },
});
