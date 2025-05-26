import {
	ignores,
	imports,
	javascript,
	perfectionist,
	promise,
	stylistic,
	typescript,
	vue,
} from './configs/index.js'

export function postanu(options) {
	const config = []

	config.push(
		ignores(options.ignores),
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

	if (options.perfectionist) {
		config.push(perfectionist())
	}

	return config.flat()
}
