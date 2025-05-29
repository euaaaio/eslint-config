import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export function prettier() {
	return defineConfig([{
		name: 'euaaaio/prettier',
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			...eslintPluginPrettierRecommended.rules,
			'prettier/prettier': 'warn',
		},
	}])
}
