export interface ConfigOptions {
  features?: {
    /** @default true */
    perfectionist?: boolean;
    /** @default false */
    tailwind?: boolean;
    /** @default true */
    unicorn?: boolean;
    /** @default false */
    vue?: boolean;
  };

  /** `tsconfig.json` files for TypeScript. */
  project: string[];

  ignores?: Ignores['ignores'];
  overrides?: {
    javascript?: Rules;
    perfectionist?: Rules;
    tailwind?: Rules;
    typescript?: Rules;
    unicorn?: Rules;
    vue?: Rules;
  };

  /** @see https://typescript-eslint.io/rules/no-floating-promises#allowforknownsafepromises */
  knownSafePromises?: KnownSafePromise[];
}

export interface Ignores {
  ignores: string[];
}

export type Severity = 'error' | 'warn' | 'off' | 0 | 1;

export type Rules = Record<string, Severity | any[]>;

export interface KnownSafePromise {
  from: string;
  name: string;
  package?: string;
}

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
