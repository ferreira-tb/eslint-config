import { stylisticRules } from './stylistic';
import { Glob, interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

/**
 * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/
 */
export async function jsonc(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const { overrides, jsonc: enabled } = options;
  if (!enabled) return [];

  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser')),
  ]);

  const rules: Rules = {
    'jsonc/no-bigint-literals': 'error',
    'jsonc/no-binary-expression': 'error',
    'jsonc/no-binary-numeric-literals': 'error',
    'jsonc/no-infinity': 'error',
    'jsonc/no-nan': 'error',
    'jsonc/no-number-props': 'error',
    'jsonc/no-undefined-value': 'error',
    'jsonc/valid-json-number': 'error',

    ...overrides?.jsonc,
  };

  if (options.stylistic) {
    Object.assign(rules, {
      'jsonc/comma-dangle': ['error', 'never'],
      'jsonc/quotes': ['error', 'double', { avoidEscape: false }],
      'jsonc/space-unary-ops': 'error',
    });

    const jsoncStylistic = [
      'jsonc/array-bracket-newline',
      'jsonc/array-bracket-spacing',
      'jsonc/array-element-newline',
      'jsonc/comma-style',
      'jsonc/indent',
      'jsonc/key-spacing',
      'jsonc/object-curly-newline',
      'jsonc/object-curly-spacing',
      'jsonc/object-property-newline',
    ];

    Object.assign(rules, jsoncStylistic.reduce<Rules>((acc, rule) => {
      const name = rule.replace('jsonc/', 'stylistic/');
      if (Object.hasOwn(stylisticRules, name)) {
        acc[rule] = stylisticRules[name];
      }

      return acc;
    }, {}));
  }

  return [
    { plugins: { jsonc: jsoncPlugin } },
    {
      files: [Glob.Json],
      languageOptions: { parser: jsoncParser },
    },
    { rules },
  ];
}
