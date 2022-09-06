let { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:vue-pug/vue3-recommended',
		'../ts'
	],
	plugins: [
		'vue'
	],
	env: {
		'vue/setup-compiler-macros': true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		extraFileExtensions: ['.vue']
	},
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.ts'] }
		}
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],
		'vue/script-setup-uses-vars': 'error',

		'import/named': 'off',
		'import/extensions': ['error', 'ignorePackages', {
			'ts': 'never'
		}]
	}
})
