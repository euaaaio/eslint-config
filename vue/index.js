module.exports = {
	extends: [
		'plugin:vue/vue3-recommended',
		'../ts'
	],
	plugins: [
		'vue'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue']
	},
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.ts'] }
		}
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],

		'import/named': 'off',
		'import/extensions': ['error', 'ignorePackages', {
			'ts': 'never'
		}]
	}
}
