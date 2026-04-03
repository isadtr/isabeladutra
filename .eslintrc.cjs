import * as eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
    },
    settings: {
      react: {
        version: '18.3'
      }
    }
  }
);
