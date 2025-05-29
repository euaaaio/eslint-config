import gitignore from 'eslint-config-flat-gitignore'
import { defineConfig } from 'eslint/config'
import { GLOB_EXCLUDE } from '../globs.js'

export function ignores(files = []) {
	return defineConfig([
		{
			name: 'euaaaio/ignores',
			ignores: [
				...GLOB_EXCLUDE,
				...files,
			],
		},
		{
			...gitignore({
				name: 'euaaaio/ignores/git',
				strict: false,
			}),
		},
	])
}
