import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules
 */
export async function unicorn(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'unicorn')) return {};

  const plugin = await interopDefault(import('eslint-plugin-unicorn'));

  return {
    plugins: { unicorn: plugin },
    rules: {
      'unicorn/catch-error-name': ['error', { name: 'err' }],
      'unicorn/consistent-empty-array-spread': 'error',
      'unicorn/consistent-existence-index-check': 'error',
      'unicorn/consistent-function-scoping': ['error', { checkArrowFunctions: false }],
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-method-this-argument': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/no-await-expression-member': 'error',
      'unicorn/no-await-in-promise-methods': 'error',
      'unicorn/no-invalid-fetch-options': 'error',
      'unicorn/no-invalid-remove-event-listener': 'error',
      'unicorn/no-length-as-slice-end': 'error',
      'unicorn/no-magic-array-flat-depth': 'error',
      'unicorn/no-negation-in-equality-check': 'error',
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
      'unicorn/prefer-global-this': 'error',
      'unicorn/prefer-math-min-max': 'error',
      'unicorn/prefer-modern-dom-apis': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-number-properties': 'error',
      'unicorn/prefer-object-from-entries': 'error',
      'unicorn/prefer-prototype-methods': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-regexp-test': 'error',
      'unicorn/prefer-string-raw': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-structured-clone': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/relative-url-style': ['error', 'never'],

      ...options.overrides?.unicorn,
    },
  };
}
