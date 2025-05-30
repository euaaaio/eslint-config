import parserTypescript from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import parserVue from 'vue-eslint-parser'
import { GLOB_VUE } from '../globs.js'

export function vue(options = {}) {
	const languageOptionsWithTS = {
		parser: parserVue,
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
			extraFileExtensions: ['.vue'],
			parser: parserTypescript,
			sourceType: 'module',
		},
	}

	return defineConfig([
		{
			name: 'euaaaio/vue',
			files: [GLOB_VUE],
			plugins: {
				vue: pluginVue,
			},
			processor: pluginVue.processors.vue,
			languageOptions: options.typescript ? languageOptionsWithTS : null,
			rules: {
				...pluginVue.configs['flat/recommended'].rules,

				// Disabled TypeScript rules
				'@typescript-eslint/prefer-function-type': 'off',

				'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
				'vue/define-props-declaration': ['error', 'type-based'],
				'vue/define-macros-order': ['error', {
					order: [
						'defineOptions',
						'defineModel',
						'defineProps',
						'defineEmits',
						'defineSlots',
					],
					defineExposeLast: true,
				}],
				'vue/no-import-compiler-macros': ['error'],
				'vue/no-undef-components': ['error', {
					ignorePatterns: ['RouterLink'],
				}],
				'vue/no-unused-emit-declarations': ['error'],
				'vue/no-unused-refs': ['error'],
				'vue/no-useless-v-bind': ['error'],
				'vue/no-use-v-else-with-v-for': ['error'],
				'vue/no-v-html': 'off',
				'vue/max-attributes-per-line': 'off',
				'vue/singleline-html-element-content-newline': 'off',
				'vue/one-component-per-file': 'off',
			},
		},
	])
}
