import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        /^node:/,
        /@typescript-eslint/,
        'globals',
        '@stylistic/eslint-plugin',
        '@typescript-eslint/parser',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-perfectionist',
        'eslint-plugin-unicorn',
        'eslint-plugin-vitest',
        'eslint-plugin-vue',
        'vue-eslint-parser',
      ],
    },
  },
});
