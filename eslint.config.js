import { defineConfig } from './dist/index.js';

export default defineConfig({
  project: ['./tsconfig.json'],
  ignores: ['index.d.ts'],
  overrides: {
    typescript: {
      'no-explicit-any': 'off',
      'no-unsafe-member-access': 'off',
    },
  },
});
