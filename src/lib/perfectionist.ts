import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://eslint-plugin-perfectionist.azat.io/rules/
 */
export async function perfectionist(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'perfectionist')) return {};

  const plugin = await interopDefault(import('eslint-plugin-perfectionist'));

  return {
    plugins: { perfectionist: plugin },
    rules: {
      'perfectionist/sort-array-includes': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          groupKind: 'literals-first',
        },
      ],

      'perfectionist/sort-enums': 'off',
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
          newlinesBetween: 'never',
          groups: [['side-effect-style', 'side-effect'], 'unknown'],
        },
      ],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-intersection-types': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],

      'sort-imports': 'off',
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
        },
      ],
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-union-types': 'off',
      'perfectionist/sort-switch-case': 'off',

      ...options.overrides?.perfectionist,
    },
  };
}
