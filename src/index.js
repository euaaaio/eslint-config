import {
	deMorgan,
	ignores,
	imports,
	javascript,
	node,
	perfectionist,
	prettier,
	promise,
	stylistic,
	test,
	typescript,
	unicorn,
	vue,
} from './configs/index.js'

export function defineConfig(options, ...userConfigs) {
	const {
		typescript: enableTypescript = false,
		vue: enableVue = false,
		test: enableTest = false,
		stylistic: enableStylistic = false,
		prettier: enablePrettier = false,
		unicorn: enableUnicorn = true,
		perfectionist: enablePerfectionist = false,
	} = options

	const configs = []

	configs.push(
		ignores(options.ignores),
		javascript(),
		imports(),
		promise(),
		node(),
		deMorgan(),
	)

	const extraFileExtensions = []
	if (options.vue) {
		extraFileExtensions.push('.vue')
	}

	if (enableUnicorn) {
		configs.push(unicorn())
	}

	if (enableTypescript) {
		configs.push(
			typescript({
				extraFileExtensions,
			}),
		)
	}

	if (enableVue) {
		const vueOptions = typeof options.vue === 'object' ? options.vue : {}
		configs.push(
			vue({
				typescript: options.typescript,
				...vueOptions,
			}),
		)
	}

	if (enableTest) {
		configs.push(test())
	}

	if (enablePrettier) {
		configs.push(prettier())
	}

	if (!enablePrettier) {
		let stylisticOptions = false
		if (enableStylistic) {
			stylisticOptions = typeof options.stylistic === 'object' ? options.stylistic : {}
		}
		if (stylisticOptions !== false) {
			configs.push(stylistic(stylisticOptions))
		}
	}

	if (enablePerfectionist) {
		configs.push(perfectionist())
	}

	configs.push(...userConfigs)

	return configs.flat()
}
