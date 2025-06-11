import pluginTypescript from '@typescript-eslint/eslint-plugin'
import parserTypescript from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import process from 'node:process'
import { GLOB_TESTS, GLOB_TS } from '../globs.js'
import { javascript } from './javascript.js'

export function typescript(options = {}) {
	const { extraFileExtensions = [] } = options
	const files = [
		GLOB_TS,
		...extraFileExtensions.map(ext => `**/*${ext}`),
	]

	return defineConfig([
		{
			name: 'euaaaio/typescript',
			files,
			languageOptions: {
				parser: parserTypescript,
				parserOptions: {
					sourceType: 'module',
					tsconfigRootDir: process.cwd(),
					projectService: true,
					extraFileExtensions,
				},
			},
			plugins: {
				'@typescript-eslint': pluginTypescript,
			},
			rules: {
				...javascript().rules,

				// Disabled JavaScript rules
				'init-declarations': 'off',
				'no-redeclare': 'off',

				...pluginTypescript.configs['stylistic-type-checked'].rules,
				...pluginTypescript.configs['strict-type-checked'].rules,

				// Disabled
				'@typescript-eslint/consistent-type-definitions': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
				'@typescript-eslint/no-deprecated': 'off',
				'@typescript-eslint/no-empty-function': 'off',

				// Disable not stable
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-enum-comparison': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',

				// Improvements
				'@typescript-eslint/array-type': ['error', {
					default: 'array-simple',
				}],
				'@typescript-eslint/no-misused-promises': ['error', {
					checksVoidReturn: false,
				}],
			},
		},
		{
			name: 'euaaaio/typescript/testing',
			files: GLOB_TESTS,
			rules: {
				'@typescript-eslint/no-explicit-any': 'off',
			},
		},
	])
}
