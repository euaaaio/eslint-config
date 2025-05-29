import stylisticEslintPlugin from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export function stylistic(options) {
	const { overrides, ...customizeOptions } = options
	const config = stylisticEslintPlugin.configs.customize({
		braceStyle: '1tbs',
		...customizeOptions,
	})

	return defineConfig([
		{
			name: 'euaaaio/stylistic',
			plugins: {
				'@stylistic': stylisticEslintPlugin,
			},
			rules: {
				...config.rules,
				...overrides,
			},
		},
	])
}
