import config from './dist/index.mjs';

export default config({
  project: ['./tsconfig.json'],
  ignores: ['index.d.ts']
});
