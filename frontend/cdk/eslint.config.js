// @ts-chrck

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: [
      '{bin,lib}/**/*.ts',
    ],
    ignores: [
      '**/*.d.ts',
      'out',
      '**/gql/**/*',
      'cdk.out',
      '**/generated/**/*.*',
    ],
    ...importPlugin.flatConfigs.recommended,
    ...importPlugin.flatConfigs.typescript,
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
);
