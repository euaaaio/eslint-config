module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		extraFileExtensions: ['.vue']
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'../ts'
	],
	plugins: [
		'vue'
	],
	settings: {
		'import/resolver': {
			node: { extensions: ['.js', '.ts'] }
		}
	},
	rules: {
		'vue/html-indent': ['error', 'tab'],

		'import/extensions': ['error', 'ignorePackages', {
			'ts': 'never'
		}]
	}
}
