import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import process from 'node:process'
import { javascript } from './javascript.js'

export function typescript(options = {}) {
	const { extraFileExtensions = [] } = options
	const files = [
		'**/*.ts',
		...extraFileExtensions.map(ext => `**/*${ext}`),
	]

	return defineConfig([
		{
			name: 'euaaaio/typescript',
			files,
			languageOptions: {
				parser: typescriptEslintParser,
				parserOptions: {
					sourceType: 'module',
					tsconfigRootDir: process.cwd(),
					projectService: true,
					extraFileExtensions,
				},
			},
			plugins: {
				'@typescript-eslint': typescriptEslintPlugin,
			},
			rules: {
				...javascript().rules,

				// Disabled JavaScript rules
				'init-declarations': 'off',
				'no-redeclare': 'off',

				...typescriptEslintPlugin.configs['stylistic-type-checked'].rules,
				...typescriptEslintPlugin.configs['strict-type-checked'].rules,

				// Disabled
				'@typescript-eslint/consistent-type-definitions': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',

				// Improvements
				'@typescript-eslint/array-type': ['error', {
					default: 'array-simple',
				}],
			},
		},
	])
}
