module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    projectRoot: __dirname,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'multiline-ternary': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
  },
};
