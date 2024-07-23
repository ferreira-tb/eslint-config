import { GlobIgnore } from './enum';

export * from './enum';

export async function interopDefault(promise: Promise<unknown>): Promise<unknown> {
  const result = await promise;
  return (result as any).default ?? result;
}

export async function json<T>(path: string) {
  return interopDefault(import(path, { with: { type: 'json' } })) as Promise<T>;
}

export function getIgnores(): string[] {
  return Object.values(GlobIgnore);
}
