import { defineConfig } from 'eslint/config'
import { GLOB_EXCLUDE } from '../globs.js'
import gitignore from 'eslint-config-flat-gitignore'

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
			name: 'postanu/ignores/git',
			...gitignore({ strict: false }),
		},
	])
}
