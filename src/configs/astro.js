import parserTypescript from '@typescript-eslint/parser'
import parserAstro from 'astro-eslint-parser'
import pluginAstro from 'eslint-plugin-astro'
import { defineConfig } from 'eslint/config'
import { GLOB_ASTRO } from '../globs.js'

export function astro(options = {}) {
	const { typescript = false, stylistic = false } = options

	return defineConfig([
		{
			name: 'euaaaio/astro',
			files: [GLOB_ASTRO],
			plugins: {
				astro: pluginAstro,
			},
			languageOptions: {
				globals: pluginAstro.environments.astro.globals,
				parser: parserAstro,
				parserOptions: {
					extraFileExtensions: ['.astro'],
					parser: typescript ? parserTypescript : undefined,
				},
				sourceType: 'module',
			},
			processor: typescript ? 'astro/client-side-ts' : 'astro/astro',
			rules: {
				...pluginAstro.configs['flat/recommended'].rules,

				...typescript
					? {
							'@typescript-eslint/no-deprecated': 'off',
						}
					: {},

				...stylistic
					? {
							'@stylistic/jsx-one-expression-per-line': 'off',
						}
					: {},
			},
		},
	])
}
