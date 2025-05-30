import pluginVitest from '@vitest/eslint-plugin'
import { defineConfig } from 'eslint/config'
import { GLOB_TESTS } from '../globs.js'

export function test() {
	return defineConfig([{
		files: GLOB_TESTS,
		plugins: {
			vitest: pluginVitest,
		},
	}])
}
