import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

export async function reactHooks(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'react')) return {};

  // @ts-expect-error no types
  const plugin = await interopDefault(import('eslint-plugin-react-hooks'));

  return {
    plugins: { 'react-hooks': plugin },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      ...options.overrides?.reactHooks,
    },
  };
}
