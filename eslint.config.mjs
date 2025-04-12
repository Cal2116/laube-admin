import tseslint from 'typescript-eslint'
import eslint from '@eslint/js'
import eslintPrettier from 'eslint-plugin-prettier'
import importSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

const ignores = [
  'dist',
  'build',
  '**/*.js',
  '**/*.mjs',
  '**/*.d.ts',
  'eslint.config.js',
  'commitlint.config.js',
  'apps/frontend/monitor/src/components/ui/**/*',
  'packages/browser-utils/src/metrics/**/*',
]

const frontendMonitorConfig = {
  files: ['packages/admin/**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}

const backendMonitorConfig = {
  files: ['packages/server/**/*.ts'],
  languageOptions: {
    globals: {
      ...globals.node,
    },
    parser: tseslint.parser,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'error',
  },
}

export default tseslint.config(
  {
    ignores,
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      prettier: eslintPrettier,
      'simple-import-sort': importSort,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  frontendMonitorConfig,
  backendMonitorConfig
)
