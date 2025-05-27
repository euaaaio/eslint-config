import gitignore from 'eslint-config-flat-gitignore'
import { defineConfig } from 'eslint/config'
import { GLOB_EXCLUDE } from '../globs.js'

export function ignores(files = []) {
	return defineConfig([
		{
			name: 'postanu/ignores',
			ignores: [
				...GLOB_EXCLUDE,
				...files,
			],
		},
		{
			...gitignore({
				name: 'postanu/ignores/git',
				strict: false,
			}),
		},
	])
}
