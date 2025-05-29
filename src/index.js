import {
	ignores,
	imports,
	javascript,
	perfectionist,
	prettier,
	promise,
	stylistic,
	typescript,
	unicorn,
	vue,
} from './configs/index.js'

export function defineConfig(options, ...userConfigs) {
	const config = []

	config.push(
		ignores(options.ignores),
		javascript(),
		imports(),
		promise(),
		unicorn(),
	)

	const extraFileExtensions = []
	if (options.vue) {
		extraFileExtensions.push('.vue')
	}

	if (options.typescript) {
		config.push(
			typescript({
				extraFileExtensions,
			}),
		)
	}

	if (options.vue) {
		config.push(
			vue({
				typescript: options.typescript,
			}),
		)
	}

	if (options.prettier) {
		config.push(prettier())
	}

	if (!options.prettier) {
		let stylisticOptions = {}
		if (!options.stylistic) {
			stylisticOptions = false
		} else if (typeof options.stylistic === 'object') {
			stylisticOptions = options.stylistic
		}

		if (stylisticOptions) {
			config.push(stylistic(stylisticOptions))
		}
	}

	if (options.perfectionist) {
		config.push(perfectionist())
	}

	config.push(...userConfigs)

	return config.flat()
}
