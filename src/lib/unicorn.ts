import { interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules
 */
export async function unicorn(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  const { overrides, unicorn: enabled = true } = options;
  if (!enabled) return {};

  // @ts-expect-error: not typed
  const plugin = await interopDefault(import('eslint-plugin-unicorn'));

  return {
    plugins: {
      unicorn: plugin
    },
    rules: {
      'unicorn/catch-error-name': [
        'error',
        {
          name: 'err'
        }
      ],
      'unicorn/consistent-function-scoping': [
        'error',
        {
          checkArrowFunctions: true
        }
      ],
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-single-promise-in-promise-methods': 'error',
      'unicorn/no-thenable': 'error',
      'unicorn/no-typeof-undefined': 'off',
      'unicorn/no-useless-fallback-in-spread': 'error',
      'unicorn/no-useless-length-check': 'error',
      'unicorn/no-useless-promise-resolve-reject': 'error',
      'unicorn/prefer-at': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/prefer-dom-node-append': 'error',
      'unicorn/prefer-dom-node-dataset': 'error',
      'unicorn/prefer-dom-node-remove': 'error',
      'unicorn/prefer-dom-node-text-content': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/relative-url-style': ['error', 'never'],

      ...overrides?.unicorn
    }
  };
}
