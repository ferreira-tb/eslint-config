import { Glob, interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

export const stylisticRules: Rules = {
  'stylistic/array-bracket-newline': ['error', 'consistent'],
  'stylistic/array-bracket-spacing': ['error', 'never'],
  'stylistic/array-element-newline': ['error', 'consistent'],
  'stylistic/arrow-parens': ['error', 'always'],
  'stylistic/arrow-spacing': 'error',
  'stylistic/block-spacing': 'error',
  'stylistic/brace-style': ['error', 'stroustrup'],
  'stylistic/comma-dangle': ['error', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'always-multiline',
    enums: 'always-multiline',
  }],
  'stylistic/comma-spacing': ['error', { before: false, after: true }],
  'stylistic/comma-style': ['error', 'last'],
  'stylistic/computed-property-spacing': ['error', 'never'],
  'stylistic/dot-location': ['error', 'property'],
  'stylistic/eol-last': ['error', 'always'],
  'stylistic/function-call-argument-newline': ['error', 'consistent'],
  'stylistic/function-call-spacing': ['error', 'never'],
  'stylistic/function-paren-newline': ['error', 'never'],
  'stylistic/generator-star-spacing': ['error', {
    before: false,
    after: true,
    method: { before: true, after: false },
  }],
  'stylistic/implicit-arrow-linebreak': ['error', 'beside'],
  'stylistic/indent': ['error', 2, { flatTernaryExpressions: true }],
  'stylistic/indent-binary-ops': ['error', 2],
  'stylistic/key-spacing': ['error', { afterColon: true, beforeColon: false, mode: 'strict' }],
  'stylistic/keyword-spacing': ['error', { after: true, before: true }],
  'stylistic/line-comment-position': ['error', { position: 'above' }],
  'stylistic/linebreak-style': ['error', 'unix'],
  'stylistic/lines-between-class-members': ['error', {
    enforce: [
      { blankLine: 'always', prev: 'method', next: 'method' },
    ],
  }],
  'stylistic/max-len': ['error', {
    code: 100,
    tabWidth: 2,
    ignoreComments: true,
    ignoreTrailingComments: true,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true,
  }],
  'stylistic/member-delimiter-style': ['error', {
    multiline: { delimiter: 'semi', requireLast: true },
    singleline: { delimiter: 'semi', requireLast: true },
  }],
  'stylistic/new-parens': ['error', 'always'],
  'stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  'stylistic/no-confusing-arrow': ['error', { allowParens: true }],
  'stylistic/no-extra-parens': ['error', 'all', {
    nestedBinaryExpressions: false,
    ternaryOperandBinaryExpressions: false,
  }],
  'stylistic/no-extra-semi': 'error',
  'stylistic/no-floating-decimal': 'error',
  'stylistic/no-mixed-spaces-and-tabs': 'error',
  'stylistic/no-multi-spaces': 'error',
  'stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
  'stylistic/no-tabs': 'error',
  'stylistic/no-trailing-spaces': 'error',
  'stylistic/no-whitespace-before-property': 'error',
  'stylistic/nonblock-statement-body-position': ['error', 'beside'],
  'stylistic/object-curly-newline': ['error', { consistent: true }],
  'stylistic/object-curly-spacing': ['error', 'always'],
  'stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'stylistic/operator-linebreak': ['error', 'before'],
  'stylistic/padded-blocks': ['error', 'never'],
  'stylistic/quote-props': ['error', 'as-needed', { unnecessary: true, numbers: true }],
  'stylistic/quotes': ['error', 'single', { avoidEscape: true }],
  'stylistic/rest-spread-spacing': ['error', 'never'],
  'stylistic/semi': ['error', 'always'],
  'stylistic/semi-spacing': ['error', { before: false, after: false }],
  'stylistic/semi-style': ['error', 'last'],
  'stylistic/space-before-blocks': ['error', 'always'],
  'stylistic/space-before-function-paren': ['error', {
    anonymous: 'always',
    named: 'never',
    asyncArrow: 'always',
  }],
  'stylistic/space-in-parens': ['error', 'never'],
  'stylistic/space-infix-ops': 'error',
  'stylistic/space-unary-ops': [1, {
    words: true,
    nonwords: false,
  }],
  'stylistic/spaced-comment': ['error', 'always'],
  'stylistic/switch-colon-spacing': ['error', { after: true, before: false }],
  'stylistic/template-curly-spacing': ['error', 'never'],
  'stylistic/template-tag-spacing': ['error', 'never'],
  'stylistic/type-annotation-spacing': ['error', {
    before: false,
    after: true,
    overrides: {
      arrow: { before: true, after: true },
    },
  }],
  'stylistic/type-generic-spacing': 'error',
  'stylistic/type-named-tuple-spacing': 'error',
  'stylistic/yield-star-spacing': ['error', 'after'],
};

/**
 * @see https://eslint.style/rules
 */
export async function stylistic(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  const { overrides, stylistic: enabled } = options;
  if (!enabled) return {};

  const plugin = await interopDefault(import('@stylistic/eslint-plugin'));

  const files = [Glob.All];
  if (options.vue) files.push(Glob.Vue);

  const rules: Rules = {
    ...stylisticRules,
    ...overrides?.stylistic,
  };

  return {
    files,
    plugins: { stylistic: plugin },
    rules,
  };
}
