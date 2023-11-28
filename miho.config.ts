import { defineConfig, PackageManager } from 'miho';

export default defineConfig({
  packageManager: PackageManager.PNPM,
  recursive: false,
  commit: {
    push: true,
    all: true
  },
  jobs: {
    build: true,
    publish: false
  }
});
