// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const path = require('path');

// eslint-disable-next-line no-undef
module.exports =  {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  env: {
    browser: true,
    es6: true
  },
  rules: {
    '@typescript-eslint/semi': [
      'error'
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 1,
    'no-case-declarations': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // eslint-disable-next-line no-undef
    project: path.join(__dirname, 'tsconfig.eslint.json')
  }
};