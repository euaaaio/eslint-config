import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import process from 'node:process'

export function typescript() {
	return defineConfig([
		{
			name: 'euaaaio/typescript',
			files: ['**/*.ts'],
			languageOptions: {
				parser: typescriptEslintParser,
				parserOptions: {
					sourceType: 'module',
					tsconfigRootDir: process.cwd(),
					projectService: true,
				},
			},
			plugins: {
				'@typescript-eslint': typescriptEslintPlugin,
			},
			rules: {
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
