import { javascript, typescript } from './lib';
import type { ConfigObject, ConfigOptions, Ignores } from './types';
import { getIgnores } from './utils';

async function config(options: ConfigOptions): Promise<(ConfigObject | Ignores)[]> {
  return [
    javascript(options),
    await typescript(options),
    {
      ignores: [...getIgnores(), ...(options.ignores ?? [])]
    }
  ];
}

export default config;
