// @ts-chrck

import nextPlugin from '@next/eslint-plugin-next';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import storybookPlugin from 'eslint-plugin-storybook';
import flowtypePlugin from 'eslint-plugin-flowtype';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommended,
  {
    ignores: [
      '.next',
      'public/mockServiceWorker.js',
      '**/*.d.ts',
      'out',
      '**/src/gql/**/*.*',
      'cdk.out',
      '**/lambda/generated/**/*.*',
    ],
  },
  {
    files: [
      'src/**/*.{ts,tsx}',
      '{bin,lib,lambda}/**/*.ts',
      '{bin,lib}/**/*.ts',
    ],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      '@next/next': nextPlugin,
      'flow-type': flowtypePlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-duplicate-head': 'off',
      '@next/next/no-img-element': 'error',
      '@next/next/no-page-custom-font': 'off',
    },
  },
);
