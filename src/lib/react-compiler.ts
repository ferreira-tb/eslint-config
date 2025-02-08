import { interopDefault, isEnabled } from '../utils';
import type { ConfigObject, ConfigOptions } from '../types';

export async function reactCompiler(options: ConfigOptions): Promise<Partial<ConfigObject>> {
  if (!isEnabled(options.features, 'reactCompiler')) return {};

  // @ts-expect-error no types
  const plugin = await interopDefault(import('eslint-plugin-react-compiler'));

  return {
    plugins: { 'react-compiler': plugin },
    rules: {
      'react-compiler/react-compiler': 'error',

      ...options.overrides?.reactCompiler,
    },
  };
}
