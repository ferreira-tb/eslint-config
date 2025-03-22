export interface FeaturesObject {
  /** @default true */
  perfectionist?: boolean;
  /** @default false */
  react?: boolean;
  /** @default false */
  reactCompiler?: boolean;
  /** @default false */
  reactHooks?: boolean;
  /** @default false */
  svelte?: boolean;
  /** @default false */
  tailwind?: boolean;
  /** @default true */
  unicorn?: boolean;
  /** @default false */
  vue?: boolean;
}

export interface ConfigOptions {
  features?: FeaturesObject | (keyof FeaturesObject)[] | boolean;

  /** `tsconfig.json` files for TypeScript. */
  project: string[];

  ignores?: Ignores['ignores'];
  overrides?: {
    javascript?: Rules;
    perfectionist?: Rules;
    react?: Rules;
    reactCompiler?: Rules;
    reactHooks?: Rules;
    svelte?: Rules;
    tailwind?: Rules;
    typescript?: Rules;
    unicorn?: Rules;
    vue?: Rules;
  };

  /**
   * @see https://typescript-eslint.io/rules/no-floating-promises/#allowforknownsafecalls
   */
  knownSafeCalls?: KnownSafeCalls[];
  /**
   * @see https://typescript-eslint.io/rules/no-floating-promises#allowforknownsafepromises
   */
  knownSafePromises?: KnownSafePromise[];
  /**
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types#configuring-in-a-mixed-jsts-codebase
   */
  moduleBoundaryTypesFiles?: string[];
  /**
   * @see https://github.com/jsx-eslint/eslint-plugin-react#configuration
   */
  reactVersion?: string;
}

export interface Ignores {
  ignores: string[];
}

export type Severity = 'error' | 'warn' | 'off' | 0 | 1;

export type Rules = Record<string, Severity | any[]>;

interface TypeOrValueSpecifier {
  from: 'file' | 'lib' | 'package';
  name: string | string[];
  package?: string;
  path?: string;
}

export type KnownSafePromise = TypeOrValueSpecifier;
export type KnownSafeCalls = TypeOrValueSpecifier;

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
  overrides?: Record<string, unknown>[];
  plugins?: Record<string, unknown>;
  processor?: unknown;
  rules: Rules;
  /** @see https://eslint.org/docs/latest/use/configure/configuration-files#configuring-shared-settings */
  settings?: Record<string, unknown>;
}
