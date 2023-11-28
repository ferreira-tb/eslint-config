import { GlobIgnore } from './enum';

export * from './enum';

export async function interopDefault(promise: Promise<unknown>) {
  const result = await promise;
  return (result as any).default ?? result;
}

export function getIgnores(): string[] {
  return Object.values(GlobIgnore);
}