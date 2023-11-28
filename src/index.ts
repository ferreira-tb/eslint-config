import { javascript, typescript } from './lib';
import type { ConfigObject, ConfigOptions } from './types';
import { getIgnores } from './utils';
import type { WithRequired } from 'miho';

async function config(options: ConfigOptions): Promise<ConfigObject[]> {
  const ignores = [...getIgnores(), ...(options.ignores ?? [])];
  const args: WithRequired<ConfigOptions, 'ignores'> = { ...options, ignores };

  return [javascript(args), await typescript(args)];
}

export default config;
