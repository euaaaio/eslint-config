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

				// Additional rules
				'unicorn/better-regex': 'error',
				'unicorn/custom-error-definition': 'error',
				'unicorn/prefer-import-meta-properties': 'error',
				'unicorn/prefer-json-parse-buffer': 'error',
			},
		},
	])
}
