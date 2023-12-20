import dts from 'vite-plugin-dts';
import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [typescript(), dts({ rollupTypes: true })],
  input: 'src/index.ts',
  external: [
    /^node:/,
    /@typescript-eslint/,
    'globals',
    '@typescript-eslint/parser',
    '@typescript-eslint/eslint-plugin',
    'eslint-config-prettier',
    'eslint-plugin-perfectionist',
    'eslint-plugin-unicorn',
    'eslint-plugin-vitest',
    'eslint-plugin-vue',
    'vue-eslint-parser'
  ],
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
      generatedCode: 'es2015'
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      generatedCode: 'es2015'
    }
  ]
});
