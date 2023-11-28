/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import eslintConfigPrettier from 'eslint-config-prettier';
import { javascript, typescript, vue } from './lib';
import type { ConfigObject, ConfigOptions } from './types';
import { getIgnores } from './utils';

async function config(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const { prettier = true } = options;
  const objs: Partial<ConfigObject>[] = await Promise.all([
    javascript(options),
    typescript(options),
    ...(await vue(options)),
    prettier ? eslintConfigPrettier : {},
    {
      ignores: [...getIgnores(), ...(options.ignores ?? [])]
    }
  ]);

  return objs;
}

export default config;
