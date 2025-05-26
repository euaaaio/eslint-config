import typescriptEslintParser from '@typescript-eslint/parser'
import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export function vue(options) {
	return defineConfig([
		{
			name: 'postanu/vue',
			extends: [...eslintPluginVue.configs['flat/recommended']],
			languageOptions: {
				parserOptions: {
					parser: options.typescript ? typescriptEslintParser : null,
				},
			},
			rules: {
				'vue/no-v-html': 'off',
				'vue/max-attributes-per-line': 'off',
				'vue/singleline-html-element-content-newline': 'off',
			},
		},
	])
}
