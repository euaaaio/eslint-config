import js from '@eslint/js'
import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

export function javascript(): Linter.Config[] {
	return defineConfig([
		{
			name: 'postanu/javascript',
			files: ['**/*.js'],
			plugins: {
				js
			},
			extends: ['js/all']
		}
	])
}
