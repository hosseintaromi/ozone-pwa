// eslint.config.js
import next from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import simpleSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      parser: typescriptParser,
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleSort,
      react,
      '@next': next,
    },
    rules: {
      'no-var': 'error',
      'no-console': 'error',
      'prefer-const': 'off',
      'no-unused-vars': 'off',
      'no-irregular-whitespace': 'off',
      'no-unsafe-optional-chaining': 0,
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@next/no-img-element': 'error',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      //#region  //*=========== Import Sort ===========
      'simple-import-sort/exports': 'off',
      //#endregion  //*======== Import Sort ===========
    },
  },
];
