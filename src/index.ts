import type { Linter } from 'eslint'

import { javascript, typescript, vue } from './configs'

interface PostanuOptions {
	typescript?: boolean
	vue?: boolean
}

export function postanu(options: PostanuOptions): Linter.Config[] {
	const config: Linter.Config[][] = []

	config.push(javascript())

	if (options.typescript) {
		config.push(typescript())
	}

	if (options.vue) {
		config.push(vue({ typescript: options.typescript }))
	}

	return config.flat()
}
