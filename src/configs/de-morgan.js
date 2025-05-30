import eslintPluginDeMorgan from 'eslint-plugin-de-morgan'
import { defineConfig } from 'eslint/config'

export function deMorgan() {
	return defineConfig([
		{
			...eslintPluginDeMorgan.configs.recommended,
			name: 'euaaaio/de-morgan',
		},
	])
}
