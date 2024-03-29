/** @see https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects */
export interface ConfigObject {
  files: string[];
  ignores?: Ignores['ignores'];
  languageOptions: {
    ecmaVersion?: 'latest';
    globals?: Record<string, boolean | 'readonly' | 'writeable'>;
    parser?: unknown;
    parserOptions?: Record<string, unknown>;
    sourceType?: 'module';
  };
  plugins?: Record<string, unknown>;
  processor?: unknown;
  rules: Rules;
}

export interface ConfigOptions {
  /** @default true */
  perfectionist?: boolean;
  /** @default true */
  prettier?: boolean;
  /** @default true */
  unicorn?: boolean;
  /** @default false */
  vitest?: boolean;
  /** @default false */
  vue?: boolean;

  ignores?: Ignores['ignores'];
  overrides?: {
    javascript?: Rules;
    perfectionist?: Rules;
    typescript?: Rules;
    unicorn?: Rules;
    vitest?: Rules;
    vue?: Rules;
  };
  /** `tsconfig.json` files for Typescript. */
  project: string[];
}

export interface Ignores {
  ignores: string[];
}

export type Severity = 'error' | 'warn' | 'off' | 0 | 1;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Rules = Record<string, Severity | any[]>;
