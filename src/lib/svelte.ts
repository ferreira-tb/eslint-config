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
    'svelte/block-lang': ['error', { script: 'ts' }],
    'svelte/button-has-type': 'error',
    'svelte/infinite-reactive-loop': 'error',
    'svelte/no-at-debug-tags': 'off',
    'svelte/no-at-html-tags': 'error',
    'svelte/no-dom-manipulating': 'error',
    'svelte/no-dupe-else-if-blocks': 'error',
    'svelte/no-dupe-on-directives': 'error',
    'svelte/no-dupe-style-properties': 'error',
    'svelte/no-dupe-use-directives': 'error',
    'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
    'svelte/no-ignored-unsubscribe': 'error',
    'svelte/no-immutable-reactive-statements': 'error',
    'svelte/no-inline-styles': 'error',
    'svelte/no-inspect': 'off',
    'svelte/no-not-function-handler': 'error',
    'svelte/no-object-in-text-mustaches': 'error',
    'svelte/no-reactive-functions': 'error',
    'svelte/no-reactive-reassign': 'error',
    'svelte/no-shorthand-style-property-overrides': 'error',
    'svelte/no-store-async': 'error',
    'svelte/no-target-blank': 'error',
    'svelte/no-unknown-style-directive-property': 'error',
    'svelte/no-unnecessary-state-wrap': 'error',
    'svelte/no-unused-props': 'error',
    'svelte/no-unused-svelte-ignore': 'error',
    'svelte/no-useless-mustaches': 'error',
    'svelte/require-each-key': 'error',
    'svelte/require-store-reactive-access': 'error',
    'svelte/require-stores-init': 'error',
    'svelte/valid-each-key': 'error',

    ...options.overrides?.svelte,
  };

  return [
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
