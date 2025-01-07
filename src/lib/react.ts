import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules
 */
export async function react(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'react')) return {};

  const plugin = await interopDefault(import('eslint-plugin-react'));

  return {
    plugins: { react: plugin },
    rules: {
      'react/button-has-type': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-expression',
          unnamedComponents: 'function-expression',
        },
      ],
      'react/hook-use-state': ['error', { allowDestructuredState: true }],
      'react/jsx-boolean-value': ['error', 'never', { assumeUndefinedIsFalse: true }],
      'react/jsx-key': [
        'error',
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: false,
          warnOnDuplicates: true,
        },
      ],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': [
        'error',
        {
          allowAllCaps: false,
          allowNamespace: true,
          allowLeadingUnderscore: false,
        },
      ],
      'react/jsx-props-no-spread-multi': 'error',
      'react/no-access-state-in-setstate': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-render-return-value': 'error',
      'react/no-unsafe': 'error',

      ...options.overrides?.react,
    },
  };
}
