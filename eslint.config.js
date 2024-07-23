import config from './dist/index.js';

export default config({
  project: ['./tsconfig.json'],
  ignores: ['index.d.ts'],
  stylistic: true,
  vue: true,
  overrides: {
    typescript: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
});
