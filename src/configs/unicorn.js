import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'

export function unicorn() {
	return defineConfig([
		{
			name: 'postanu/unicorn',
			plugins: {
				unicorn: eslintPluginUnicorn,
			},
			rules: {
				...eslintPluginUnicorn.configs.recommended.rules,

				// Disabled
				'unicorn/prefer-global-this': 'off',
				'unicorn/no-null': 'off',
				'unicorn/no-array-callback-reference': 'off',

				// Improvements
				'unicorn/prevent-abbreviations': ['error', {
					replacements: {
						args: false,
						attrs: false,
						params: false,
						props: false,
					},
				}],

				// Additional
				'unicorn/better-regex': 'error',
				'unicorn/custom-error-definition': 'error',
				'unicorn/prefer-import-meta-properties': 'error',
				'unicorn/prefer-json-parse-buffer': 'error',
			},
		},

		{
			name: 'postanu/unicorn/vue',
			files: ['**/*.vue'],
			rules: {
				'unicorn/filename-case': ['error', {
					case: 'pascalCase',
				}],
			},
		},

		{
			name: 'postanu/unicorn/storybook',
			files: ['**/*.stories.{js,ts}'],
			rules: {
				'unicorn/filename-case': ['error', {
					case: 'pascalCase',
				}],
			},
		},

		{
			name: 'postanu/unicorn/testing',
			files: ['**/*.{spec,test}.{js,ts}'],
			rules: {
				'unicorn/filename-case': ['error', {
					case: 'pascalCase',
				}],
			},
		},
	])
}
