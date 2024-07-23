/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import process from 'node:process';
import { Glob } from '../utils/enum';
import { interopDefault } from '../utils';
import { stylisticRules } from './stylistic';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

/**
 * @see https://eslint.vuejs.org/rules/
 */
export async function vue(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const { overrides, vue: enabled } = options;
  if (!enabled) return [];

  const [vuePlugin, vueParser, tsParser] = await Promise.all([
    // @ts-expect-error no types
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
    interopDefault(import('@typescript-eslint/parser')),
  ]);

  const rules: Rules = {
    ...(vuePlugin as any).configs.base.rules,

    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/attributes-order': 'error',
    'vue/block-lang': ['error', {
      script: { lang: 'ts' },
      style: {
        lang: 'scss',
        allowNoLang: true,
      },
    }],
    'vue/block-order': ['error', { order: [['script', 'template'], 'style:not([scoped])', 'style[scoped]'] }],
    'vue/block-tag-newline': ['error', {
      singleline: 'always',
      multiline: 'always',
      maxEmptyLines: 0,
    }],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
    }],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': ['error', {
      order: ['defineOptions', 'defineProps', 'defineModel', 'defineEmits', 'defineSlots'],
      defineExposeLast: true,
    }],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/enforce-style-attribute': ['error', { allow: ['scoped'] }],
    'vue/first-attribute-linebreak': 'off',
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true,
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
      selfClosingTag: {
        singleline: 'never',
        multiline: 'always',
      },
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/match-component-file-name': ['off', {
      extensions: ['tsx', 'vue'],
      shouldMatchCase: false,
    }],
    'vue/match-component-import-name': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-arrow-functions-in-watch': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': ['error', {
      allowCoexistClass: true,
      allowCoexistStyle: true,
    }],
    'vue/no-export-in-script-setup': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-lifecycle-after-await': 'error',
    'vue/no-lone-template': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-ref-object-reactivity-loss': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-required-prop-with-default': ['error', { autofix: true }],
    'vue/no-root-v-if': 'error',
    'vue/no-setup-props-reactivity-loss': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-static-inline-styles': ['error', { allowBinding: false }],
    'vue/no-template-key': 'error',
    'vue/no-template-shadow': 'error',
    'vue/no-template-target-blank': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-emit-declarations': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-else-with-v-for': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-mustaches': ['error', {
      ignoreIncludesComment: false,
      ignoreStringEscape: false,
    }],
    'vue/no-useless-template-attributes': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-v-html': 'off',
    'vue/no-watch-after-await': 'error',
    'vue/order-in-components': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-define-options': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-component-is': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': ['error', { allowProps: false }],
    'vue/require-explicit-slots': 'error',
    'vue/require-macro-variable-name': ['error', {
      defineProps: 'props',
      defineEmits: 'emit',
      defineSlots: 'slots',
      useSlots: 'slots',
      useAttrs: 'attrs',
    }],
    'vue/require-prop-types': 'error',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-typed-ref': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/this-in-template': ['error', 'never'],
    'vue/use-v-on-exact': 'error',
    'vue/v-bind-style': ['error', 'shorthand', {
      sameNameShorthand: 'always',
    }],
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/v-on-handler-style': 'off',
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand',
    }],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/valid-attribute-name': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-options': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',

    ...overrides?.vue,
  };

  if (options.stylistic) {
    const vueStylistic = [
      'vue/array-bracket-newline',
      'vue/array-bracket-spacing',
      'vue/key-spacing',
      'vue/keyword-spacing',
      'vue/max-len',
      'vue/no-extra-parens',
      'vue/object-curly-newline',
      'vue/object-curly-spacing',
      'vue/object-property-newline',
      'vue/operator-linebreak',
      'vue/quote-props',
      'vue/space-in-parens',
      'vue/space-infix-ops',
      'vue/space-unary-ops',
      'vue/template-curly-spacing',
    ];

    Object.assign(rules, vueStylistic.reduce<Rules>((acc, rule) => {
      const name = rule.replace('vue/', 'stylistic/');
      if (Object.hasOwn(stylisticRules, name)) {
        acc[rule] = stylisticRules[name];
      }

      return acc;
    }, {}));
  }

  return [
    {
      plugins: { vue: vuePlugin },
    },
    {
      files: [Glob.Vue],
      languageOptions: {
        parser: vueParser,
        parserOptions: {
          parser: tsParser,
          project: options.project,
          tsconfigRootDir: process.cwd(),
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
          ecmaVersion: 'latest',
        },
      },
    },
    {
    // @ts-expect-error no types
      processor: vuePlugin.processors['.vue'],
      rules,
    },
  ];
}
