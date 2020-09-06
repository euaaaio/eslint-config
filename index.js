module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: [
		'standard',
		'plugin:node/recommended',
		'plugin:security/recommended',
		'plugin:vue/vue3-recommended'
	],
	plugins: [
		'jest',
		'mongodb',
		'security',
		'prefer-let'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		'indent': ['error', 'tab'],
		'no-tabs': 'off',
		'quote-props': 'off',
		'prefer-const': 'off',
		'prefer-arrow-callback': ['error'],

		'prefer-let/prefer-let': 'error',

		'node/no-missing-import': 'off',
		'node/no-unpublished-import': 'off',
		'node/no-unsupported-features/es-syntax': 'off',

		'import/order': ['error', {
			'groups': [
				['builtin', 'external'],
				['internal', 'parent', 'sibling', 'index']
			],
			'newlines-between': 'always'
		}],
		'import/newline-after-import': ['error'],

		'security/detect-object-injection': 'off'
	},
	overrides: [
		{
			files: [
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			},
			extends: [
				'plugin:jest/recommended',
				'plugin:jest/style'
			]
		}
	]
}
