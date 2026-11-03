import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'cypress/**',
      'icons/**'
    ]
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  {
    files: ['*.config.js', 'postcss.config.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' }
  },
  {
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'jsx-a11y/anchor-is-valid': 'off'
    }
  }
];

export default config;
