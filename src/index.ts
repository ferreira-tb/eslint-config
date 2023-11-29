/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import eslintConfigPrettier from 'eslint-config-prettier';
import { getIgnores } from './utils';
import type { ConfigObject, ConfigOptions } from './types';
import { javascript, perfectionist as perfect, typescript, vue } from './lib';

async function config(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const { prettier = true, perfectionist = true } = options;
  const objs: Partial<ConfigObject>[] = await Promise.all([
    javascript(options),
    typescript(options),
    ...(await vue(options)),
    prettier ? eslintConfigPrettier : {},
    perfectionist ? perfect() : {},
    {
      ignores: [...getIgnores(), ...(options.ignores ?? [])]
    }
  ]);

  return objs;
}

export default config;
