module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
    JSX: true,
    window: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
  },
  ignorePatterns: ['/.next/**/*', '/test/**/*', 'next.config.js', 'next-env.d.ts', '/public/**/*'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: [2, 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^react'], ['^next'], ['^@?\\w'], ['@/(.*)'], ['^[./]']],
      },
    ],
    'max-len': ['error', { code: 100 }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};