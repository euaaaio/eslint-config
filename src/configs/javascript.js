import js from '@eslint/js'
import { defineConfig } from 'eslint/config'

export function javascript() {
	return defineConfig([
		{
			name: 'postanu/javascript',
			files: ['**/*.js'],
			plugins: {
				js
			},
			extends: ['js/all'],
			rules: {
				'func-style': 'off',
				'no-ternary': 'off',
				'sort-keys': 'off',
				'sort-imports': 'off'
			}
		}
	])
}
