import { Glob } from '../utils/enum';
import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

export async function svelte(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  if (!isEnabled(options.features, 'svelte')) return [];

  const [sveltePlugin, svelteParser, tsParser] = await Promise.all([
    interopDefault(import('eslint-plugin-svelte')),
    interopDefault(import('svelte-eslint-parser')),
    interopDefault(import('@typescript-eslint/parser')),
  ]);

  const rules: Rules = {
    ...options.overrides?.svelte,
  };

  return [
    ...(sveltePlugin as any).configs.recommended,
    {
      plugins: { svelte: sveltePlugin },
      rules,
    },
    {
      files: [Glob.Svelte],
      languageOptions: {
        parser: svelteParser,
        parserOptions: {
          parser: tsParser,
          project: options.project,
          extraFileExtensions: ['.svelte'],
        },
      },
    },
  ];
}
