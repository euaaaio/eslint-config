import stylisticEslintPlugin from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export function stylistic(options) {
	const config = stylisticEslintPlugin.configs.customize({
		braceStyle: '1tbs',
		...options,
	})

	return defineConfig([
		{
			name: 'postanu/stylistic',
			plugins: {
				'@stylistic': stylisticEslintPlugin,
			},
			rules: {
				...config.rules,
			},
		},
	])
}
