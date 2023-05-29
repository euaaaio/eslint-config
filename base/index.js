let { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	extends: [
		'standard',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:n/recommended',
		'plugin:unicorn/recommended',
		'plugin:security/recommended'
	],
	plugins: [
		'unicorn',
		'promise',
		'security',
		'prefer-let'
	],
	rules: {
		// common
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'no-tabs': 'off',
		'no-shadow': 'error',
		'camelcase': 'off',
		'quote-props': 'off',
		'comma-dangle': ['error', 'never'],
		'arrow-parens': ['error', 'as-needed'],
		'no-loop-func': 'error',
		'no-lonely-if': 'error',
		'prefer-const': 'off',
		'for-direction': 'error',
		'prefer-template': 'error',
		'no-return-await': 'error',
		'no-dupe-else-if': 'error',
		'object-shorthand': 'error',
		'consistent-return': 'error',
		'prefer-rest-params': 'error',
		'prefer-arrow-callback': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-new-native-nonconstructor': 'error',
		'prefer-exponentiation-operator': 'error',
		'nonblock-statement-body-position': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// import
		'import/no-unresolved': 'off',
		'import/order': ['error', {
			'pathGroups': [
				{
					pattern: '@/**',
					group: 'internal'
				}
			],
			'pathGroupsExcludedImportTypes': ['builtin'],
			'groups': [
				['type'],
				['builtin', 'external'],
				['internal', 'parent', 'sibling', 'index']
			],
			'newlines-between': 'always'
		}],
		'import/extensions': ['error', 'always', { ignorePackages: true }],
		'import/newline-after-import': ['error'],

		// node
		'n/no-missing-import': 'off',
		'n/no-unpublished-import': 'off',
		'n/no-unsupported-features/es-syntax': 'off',

		'prefer-let/prefer-let': 'error',

		'security/detect-object-injection': 'off',

		// unicorn
		'unicorn/no-null': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/prefer-starts-ends-with': 'error',
		'unicorn/prefer-exponentiation-operator': 'error'
	}
})
