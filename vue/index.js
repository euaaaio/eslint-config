import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginTypeScript from 'typescript-eslint'
import eslintVueParser from 'vue-eslint-parser'

import typescriptConfig from '../ts/index.js'

// Stolen from https://github.com/logux/eslint-config/blob/be2320e037abac0d309022eaeb1a21a5115e909b/svelte.js#L11
let globals = {}
let cleanedTsConfig = typescriptConfig.map(config => {
	let cleaned = { ...config }
	if (cleaned.languageOptions && cleaned.languageOptions.globals) {
		globals = { ...globals, ...cleaned.languageOptions.globals }
	}
	delete cleaned.languageOptions
	return cleaned
})

export default defineFlatConfig([
	...cleanedTsConfig,
	...eslintPluginVue.configs['flat/recommended'],
	{
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parser: eslintVueParser,
			parserOptions: {
				parser: eslintPluginTypeScript.parser
			}
		},
		rules: {
			'vue/html-indent': ['error', 'tab']
		}
	},
	{
		files: ['*.ts', '**/*.ts'],
		languageOptions: {
			globals,
			parser: eslintPluginTypeScript.parser,
			parserOptions: {
				project: true
			}
		}
	}
])
