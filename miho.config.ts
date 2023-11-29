import { Octokit } from '@octokit/core';
import { PackageManager, defineConfig } from 'miho';

export default defineConfig({
  packageManager: PackageManager.PNPM,
  recursive: false,
  verbose: true,
  commit: {
    push: true,
    all: true
  },
  jobs: {
    skip: ['publish'],
    build: true,
    publish: async () => {
      const { version } = await import('./package.json');
      const { GITHUB_TOKEN } = await import('./config.json');
      const octokit = new Octokit({ auth: GITHUB_TOKEN });

      await octokit.request('POST /repos/{owner}/{repo}/releases', {
        tag_name: version,
        name: version,
        draft: false,
        prerelease: false,
        generate_release_notes: true,
        owner: 'ferreira-tb',
        repo: 'eslint-config',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          accept: 'application/vnd.github+json'
        }
      });
    }
  }
});
