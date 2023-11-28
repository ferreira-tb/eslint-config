export const enum Glob {
  ALL = '**/*.?([cm])[jt]s?(x)',
  JAVASCRIPT = '**/*.?([cm])js?(x)',
  TYPESCRIPT = '**/*.?([cm])ts?(x)',
  VUE = '**/*.vue'
}

export enum GlobIgnore {
  DIST = '**/dist',
  NODE_MODULES = '**/node_modules',
  OUT = '**/out',
  TEMP = '**/.temp'
}
