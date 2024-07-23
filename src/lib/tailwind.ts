import { interopDefault } from '../utils';
import type { ConfigObject, ConfigOptions, Rules } from '../types';

/**
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules
 */
export async function tailwind(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!options.features?.tailwind) return {};

  // @ts-expect-error no types
  const plugin = await interopDefault(import('eslint-plugin-tailwindcss'));

  const rules: Rules = {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/no-contradicting-classname': 'error',

    ...options.overrides?.tailwind,
  };

  return {
    plugins: { tailwindcss: plugin },
    rules,
  };
}
