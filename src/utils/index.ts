/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobIgnore } from './enum';

export * from './enum';

export async function interopDefault(promise: Promise<unknown>): Promise<unknown> {
  const result = await promise;
  return (result as any).default ?? result;
}

export function getIgnores(): string[] {
  return Object.values(GlobIgnore);
}