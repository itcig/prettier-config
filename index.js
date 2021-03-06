'use strict';

module.exports = {
  endOfLine: 'lf',

  semi: true,

  printWidth: 120,

  // That actually is enforced by AirBnB Style anyway.
  // Enforce 2 spaces, because JavaScript is always different
  // then the rest of the languages.
  tabWidth: 2,

  // That actually is enforced by AirBnB Style anyway.
  // Explicitness is the most important thing:
  // - Always is visible that this is function (because the parens).
  // - If you first write single param and decide to add new one,
  // then you should also add a parens around the both - that's mess.
  arrowParens: 'always',

  // Enforce single-quotes, because industry standard.
  singleQuote: true,

  // That actually is enforced by AirBnB Style anyway.
  // Always useful. And guaranteed that you won't see boring errors,
  // that eats your time, because of nothing real.
  trailingComma: 'all',

  // That actually is enforced by AirBnB Style anyway.
  // Enforce more clear object literals.
  // As seen in this example https://github.com/airbnb/javascript#objects--rest-spread
  bracketSpacing: true,

  overrides: [
    {
      files: ['**/*.json'],
      options: { parser: 'json-stringify' },
    },
    {
      files: [
        '**/angular.json',
        '**/jsconfig.json',
        '**/tsconfig.json',
        '**/tsconfig.*.json',
        '**/tslint.json',
        '**/tslint.*.json',
      ],
      options: { parser: 'json' },
    },
    {
      files: ['**/package.json'],
      options: {
        parser: 'json-stringify',
        plugins: ['prettier-plugin-pkgjson'],
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      options: { parser: 'typescript' },
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
      options: { parser: 'babel' },
    },
    {
      files: ['**/*.md'],
      options: {
        parser: 'markdown',
        proseWrap: 'always',
        printWidth: 80,
      },
    },
    {
      files: ['**/*.mdx'],
      options: {
        parser: 'mdx',
        proseWrap: 'always',
        printWidth: 80,
      },
    },
    {
      files: ['**/.all-contributorsrc'],
      options: {
        parser: 'json-stringify',
        singleQuote: false,
      },
    },
    {
      files: ['**/*.yaml'],
      options: {
        parser: 'yaml',
        singleQuote: false,
      },
    },
  ],
};
