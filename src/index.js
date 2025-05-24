import { javascript, typescript, vue } from './configs/index.js'

export function postanu(options) {
	const config = []

	config.push(javascript())

	if (options.typescript) {
		config.push(typescript())
	}

	if (options.vue) {
		config.push(
			vue({
				typescript: options.typescript
			})
		)
	}

	return config.flat()
}
