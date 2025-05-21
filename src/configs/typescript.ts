import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

export function typescript(): Linter.Config[] {
	return defineConfig([
		{
			name: 'postanu/typescript',
			files: ['**/*.ts'],
			languageOptions: {
				parser: typescriptEslintParser,
				parserOptions: {
					project: true
				},
				sourceType: 'module'
			},
			plugins: {
				// @ts-expect-error wrong types
				'@typescript-eslint': typescriptEslintPlugin
			},
			rules: {
				...typescriptEslintPlugin.configs['stylistic-type-checked'].rules,
				...typescriptEslintPlugin.configs['strict-type-checked'].rules
			}
		}
	])
}
