import * as config from './lib';
import { getIgnores } from './utils';
import type { ConfigObject, ConfigOptions } from './types';

export async function defineConfig(options: ConfigOptions): Promise<Partial<ConfigObject>[]> {
  const ignores = {
    ignores: [...getIgnores(), ...(options.ignores ?? [])],
  };

  const objects: Partial<ConfigObject>[] = await Promise.all([
    config.javascript(options),
    config.typescript(options),
    ...(await config.vue(options)),
    config.perfectionist(options),
    config.unicorn(options),
    config.tailwind(options),

    ignores,
  ]);

  return objects;
}
