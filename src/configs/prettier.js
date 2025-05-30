import pluginPrettier from 'eslint-plugin-prettier'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export function prettier() {
	return defineConfig([{
		name: 'euaaaio/prettier',
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...pluginPrettierRecommended.rules,
			'prettier/prettier': 'warn',
		},
	}])
}
