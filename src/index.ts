/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import eslintConfigPrettier from 'eslint-config-prettier';
import { getIgnores } from './utils';
import type { ConfigObject, ConfigOptions } from './types';
import {
  javascript,
  perfectionist as perfect,
  typescript,
  unicorn as uni,
  vitest,
  vue
} from './lib';

async function config(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const { prettier = true } = options;
  const objs: Partial<ConfigObject>[] = await Promise.all([
    javascript(options),
    typescript(options),
    ...(await vue(options)),
    perfect(options),
    uni(options),
    vitest(options),
    prettier ? eslintConfigPrettier : {},
    {
      ignores: [...getIgnores(), ...(options.ignores ?? [])]
    }
  ]);

  return objs;
}

export default config;
