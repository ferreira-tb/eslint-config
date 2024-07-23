import { interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

/**
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules
 */
export async function tailwind(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  const { overrides, tailwind: enabled } = options;
  if (!enabled) return {};

  // @ts-expect-error no types
  const plugin = await interopDefault(import('eslint-plugin-tailwindcss'));

  const rules: Rules = {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/no-contradicting-classname': 'error',

    ...overrides?.tailwind,
  };

  return {
    plugins: { tailwindcss: plugin },
    rules,
  };
}
