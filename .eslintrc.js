module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: { delimiter: 'none' },
      singleline: { delimiter: 'comma' },
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'import/exports-last': ['error'],
    'import/first': ['error'],
    'import/newline-after-import': ['error', { 'count': 2 }],
    'import/no-anonymous-default-export': ['error'],
    'import/no-cycle': ['error'],
    'import/no-self-import': ['error'],
    'import/no-unresolved': ['error'],
    'import/no-useless-path-segments': ['error'],
    'indent': ['error', 2],
    'no-trailing-spaces': ['error'],
    'quote-props': ['error', 'consistent-as-needed'],
    'react/prop-types': 0,
    'semi': ['error', 'never'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
