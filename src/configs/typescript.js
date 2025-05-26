import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import process from 'node:process'

export function typescript() {
	return defineConfig([
		{
			name: 'postanu/typescript',
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

				'@typescript-eslint/consistent-type-definitions': 'off',
			},
		},
	])
}
