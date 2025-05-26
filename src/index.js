import { javascript, typescript, vue, stylistic, imports, promise } from './configs/index.js'

export function postanu(options) {
	const config = []

	config.push(
		javascript(),
		imports(),
		promise(),
	)

	if (options.typescript) {
		config.push(typescript())
	}

	if (options.vue) {
		config.push(
			vue({
				typescript: options.typescript,
			}),
		)
	}

	let stylisticOptions = {}
	if (!options.stylistic) {
		stylisticOptions = false
	} else if (typeof options.stylistic === 'object') {
		stylisticOptions = options.stylistic
	}

	if (stylisticOptions) {
		config.push(stylistic(stylisticOptions))
	}

	return config.flat()
}
