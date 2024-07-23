import { Glob, interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://github.com/veritem/eslint-plugin-vitest#rules
 */
export async function vitest(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  const { overrides, vitest: enabled } = options;
  if (!enabled) return {};

  const plugin = await interopDefault(import('eslint-plugin-vitest'));

  return {
    plugins: { vitest: plugin },
    files: [Glob.Vitest],
    rules: {
      'vitest/consistent-test-it': ['error', { fn: 'it', withinDescribe: 'it' }],
      'vitest/expect-expect': ['error', { assertFunctionNames: ['expect'] }],
      'vitest/max-expects': ['error', { max: 5 }],
      'vitest/max-nested-describe': ['error', { max: 1 }],
      'vitest/no-alias-methods': 'error',
      'vitest/no-commented-out-tests': 'error',
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-done-callback': 'error',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-identical-title': 'error',
      'vitest/no-import-node-test': 'error',
      'vitest/no-standalone-expect': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/prefer-expect-resolves': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-lowercase-title': 'error',
      'vitest/prefer-mock-promise-shorthand': 'error',
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-todo': 'error',
      'vitest/require-top-level-describe': ['error', { maxNumberOfTopLevelDescribes: 10 }],
      'vitest/valid-describe-callback': 'error',
      'vitest/valid-expect': 'error',

      ...overrides?.vitest,
    },
  };
}
