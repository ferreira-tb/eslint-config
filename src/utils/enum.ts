export const enum Glob {
  TYPESCRIPT = '**/*.?([cm])[jt]s?(x)',
  VUE = '**/*.vue'
}

export enum GlobIgnore {
  DIST = '**/dist',
  NODE_MODULES = '**/node_modules',
  OUT = '**/out',
  TEMP = '**/.temp',
}