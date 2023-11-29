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
  /** @default false */
  vue?: boolean;

  ignores?: Ignores['ignores'];
  overrides?: {
    javascript?: Rules;
    typescript?: Rules;
    vue?: Rules;
  };
  /** `tsconfig.json` files for Typescript. */
  project: string[];
}

export interface Ignores {
  ignores: string[];
}

export type Severity = 'error' | 'warn' | 'off' | 0 | 1;

export type RuleOption =
  | [Severity, string | Record<string, unknown>]
  | [Severity, string, Record<string, unknown>];

export type Rules = Record<string, Severity | RuleOption>;
