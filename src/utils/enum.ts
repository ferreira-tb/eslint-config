export enum Glob {
  All = '**/*.?([cm])[jt]s?(x)',
  Javascript = '**/*.?([cm])js?(x)',
  Json = '**/*.json?([c5])',
  Typescript = '**/*.?([cm])ts?(x)',
  Vue = '**/*.vue',
}

export enum GlobIgnore {
  Cache = '**/cache',
  Dist = '**/dist',
  Log = '**/log?(s)',
  NodeModules = '**/node_modules',
  Out = '**/out',
  Target = '**/target',
  Temp = '**/?(.)temp',
}
