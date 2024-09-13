import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-useless-escape': 'off',
      quotes: ['error', 'single'],
      semi: 'off',
    },
  },
  // {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
]
