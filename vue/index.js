import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginTypeScript from 'typescript-eslint'

import typescriptConfig from '../ts/index.js'

export default defineFlatConfig([
	...typescriptConfig,
	...eslintPluginVue.configs['flat/recommended'],
	{
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: eslintPluginTypeScript.parser
			}
		},
		plugins: {
			vue: eslintPluginVue
		},
		rules: {
			'vue/html-indent': ['error', 'tab']
		}
	}
])
