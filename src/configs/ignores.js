import gitignore from 'eslint-config-flat-gitignore'
import { GLOB_EXCLUDE } from '../globs.js'
import { defineConfig } from '../utils/index.js'

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
