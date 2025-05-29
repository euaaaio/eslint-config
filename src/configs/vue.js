import typescriptEslintParser from '@typescript-eslint/parser'
import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import vueEslintParser from 'vue-eslint-parser'

export function vue(options = {}) {
	const languageOptionsWithTS = {
		parser: vueEslintParser,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			extraFileExtensions: ['.vue'],
			parser: typescriptEslintParser,
			sourceType: 'module',
		},
	}

	return defineConfig([
		{
			name: 'euaaaio/vue',
			files: ['**/*.vue'],
			plugins: {
				vue: eslintPluginVue,
			},
			processor: eslintPluginVue.processors.vue,
			languageOptions: options.typescript ? languageOptionsWithTS : null,
			rules: {
				...eslintPluginVue.configs['flat/recommended'].rules,

				// Disabled TypeScript rules
				'@typescript-eslint/prefer-function-type': 'off',

				'vue/no-v-html': 'off',
				'vue/max-attributes-per-line': 'off',
				'vue/singleline-html-element-content-newline': 'off',
				'vue/one-component-per-file': 'off',
			},
		},
	])
}
