import { interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://eslint-plugin-perfectionist.azat.io/rules/
 */
export async function perfectionist(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  const { overrides, perfectionist: enabled = true } = options;
  if (!enabled) return {};

  // @ts-expect-error: not typed
  const plugin = await interopDefault(import('eslint-plugin-perfectionist'));

  return {
    plugins: {
      perfectionist: plugin
    },
    rules: {
      'perfectionist/sort-enums': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'line-length',
          order: 'asc'
        }
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          'newlines-between': 'never',
          groups: [
            ['style', 'side-effect'],
            ['builtin', 'builtin-type'],
            ['external', 'external-type'],
            ['internal', 'internal-type'],
            'unknown'
          ]
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          'partition-by-new-line': true
        }
      ],
      'perfectionist/sort-maps': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ],
      'perfectionist/sort-named-exports': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ],

      'sort-imports': 'off',
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc'
        }
      ],

      '@typescript-eslint/adjacent-overload-signatures': 'off',
      'perfectionist/sort-object-types': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          'partition-by-new-line': true
        }
      ],

      ...overrides?.perfectionist
    }
  };
}
