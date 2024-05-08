import config from './dist/index.js';

export default config({
  project: ['./tsconfig.json'],
  ignores: ['index.d.ts'],
  overrides: {
    typescript: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  }
});
