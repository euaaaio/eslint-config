import pluginDeMorgan from 'eslint-plugin-de-morgan'
import { defineConfig } from 'eslint/config'

export function deMorgan() {
	return defineConfig([
		{
			...pluginDeMorgan.configs.recommended,
			name: 'euaaaio/de-morgan',
		},
	])
}
