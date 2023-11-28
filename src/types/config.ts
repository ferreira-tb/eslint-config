/** @see https://eslint.org/docs/latest/use/configure/configuration-files-new#configuration-objects */
export interface ConfigObject {
  files: string[];
  ignores?: Ignores['ignores'];
  languageOptions: {
    ecmaVersion: 'latest';
    sourceType: 'module';
    parser?: unknown;
    parserOptions?: {
      project?: string[];
      tsconfigRootDir?: string;
    };
    globals?: Record<string, boolean | 'readonly' | 'writeable'>;
  };
  plugins?: Record<string, unknown>;
  rules: Rules;
}

export interface ConfigOptions {
  vue?: boolean;
  /** `tsconfig.json` files for Typescript. */
  project: string[];
  ignores?: Ignores['ignores'];
  overrides?: {
    javascript?: Rules;
    typescript?: Rules;
    vue?: Rules;
  };
}

export interface Ignores {
  ignores: string[];
}

export type Severity = 'error' | 'warn' | 'off';

export type RuleOption =
  | [Severity, string | Record<string, unknown>]
  | [Severity, string, Record<string, unknown>];

export type Rules = Record<string, Severity | RuleOption>;
