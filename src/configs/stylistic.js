import pluginStylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export function stylistic(options) {
	const { overrides, ...customizeOptions } = options
	const config = pluginStylistic.configs.customize({
		braceStyle: '1tbs',
		...customizeOptions,
	})

	return defineConfig([
		{
			name: 'euaaaio/stylistic',
			plugins: {
				'@stylistic': pluginStylistic,
			},
			rules: {
				...config.rules,
				...overrides,
			},
		},
	])
}
