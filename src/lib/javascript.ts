import globals from 'globals';
import { Glob } from '../utils/enum';
import { isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

/**
 * @see https://eslint.org/docs/latest/rules/
 */
export function javascript(options: ConfigOptions): ConfigObject {
  const files = [Glob.All];
  if (isEnabled(options.features, 'vue')) {
    files.push(Glob.Vue);
  }

  return {
    files,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'accessor-pairs': ['error', { enforceForClassMembers: true, setWithoutGet: true }],
      'array-callback-return': [
        'error',
        {
          checkForEach: false,
          allowVoid: true,
        },
      ],
      'block-scoped-var': 'error',
      'consistent-this': ['error', 'self'],
      'default-case-last': 'error',
      eqeqeq: ['error', 'always'],
      'for-direction': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'init-declarations': 'off',
      'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],
      'max-params': 'off',
      'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
      'no-alert': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-else-if': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': ['error', { includeExports: false }],
      'no-else-return': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-empty-static-block': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': ['error', { allowEmptyCase: true }],
      'no-global-assign': 'error',
      'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
      'no-import-assign': 'error',
      'no-inner-declarations': ['error', 'both'],
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-promise-executor-return': ['error', { allowVoid: true }],
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-regex-spaces': 'error',
      'no-script-url': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'off',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
      'no-unused-vars': 'off',
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-with': 'error',
      'object-shorthand': ['error', 'always'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-destructuring': 'off',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-atomic-updates': ['error', { allowProperties: true }],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'symbol-description': 'off',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      yoda: ['error', 'never'],

      ...options.overrides?.javascript,
    },
  };
}
