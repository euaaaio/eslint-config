import { defineConfig } from './src/index.js'

export default defineConfig({
	typescript: true,
	vue: {
		a11y: true,
	},
	test: true,
	stylistic: {
		indent: 'tab',
	},
	perfectionist: true,
	oxlint: true,
})
