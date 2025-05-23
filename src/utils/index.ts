import { GlobIgnore } from './enum';
import type { ConfigOptions, FeaturesObject } from '../types';

export * from './enum';

const OPTIONAL_FEATURES: readonly (keyof FeaturesObject)[] = ['perfectionist', 'unicorn', 'vue'];

export async function interopDefault(promise: Promise<any>): Promise<unknown> {
  const result = await promise;
  return result.default ?? result;
}

export function isEnabled(
  config: ConfigOptions['features'],
  feature: keyof FeaturesObject
): boolean {
  if (Array.isArray(config)) {
    return OPTIONAL_FEATURES.includes(feature) ? config.includes(feature) : true;
  } else if (typeof config === 'boolean') {
    return config;
  }

  switch (feature) {
    case 'perfectionist':
      return config?.perfectionist ?? true;
    case 'unicorn':
      return config?.unicorn ?? true;
    case 'vue':
      return config?.vue ?? false;
    default:
      return false;
  }
}

export async function json<T>(path: string) {
  return interopDefault(import(path, { with: { type: 'json' } })) as Promise<T>;
}

export function getIgnores(): string[] {
  return Object.values(GlobIgnore);
}
