import type { ConfigObject, ConfigOptions } from '../types';
import { interopDefault, isEnabled, mapRules } from '../utils';

export async function unocss(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'unocss')) return {};

  const plugin = await interopDefault(import('@unocss/eslint-config/flat'));

  const overrides = mapRules(options.overrides?.unocss ?? {}, (rule, value) => {
    if (rule.startsWith('@unocss/')) {
      return [rule, value];
    }
    else {
      return [`@unocss/${rule}`, value];
    }
  });

  return {
    plugins: { '@unocss': plugin },
    rules: {
      '@unocss/blocklist': 'off',
      '@unocss/enforce-class-compile': 'off',
      '@unocss/order': 'error',
      '@unocss/order-attributify': 'off',
      ...overrides,
    },
  };
}
