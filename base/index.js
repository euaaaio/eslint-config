import { FlatCompat } from '@eslint/eslintrc'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPromise from 'eslint-plugin-promise'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

let compat = new FlatCompat({
	baseDirectory: import.meta.dirname
})

let standard = compat.extends('eslint-config-standard')

export default defineFlatConfig([
	...standard,
	{
		languageOptions: {
			sourceType: 'module'
		},
		plugins: {
			n: eslintPluginN,
			promise: eslintPluginPromise,
			unicorn: eslintPluginUnicorn,
			perfectionist: eslintPluginPerfectionist
		},
		rules: {
			// common
			indent: ['error', 'tab'],
			quotes: ['error', 'single'],
			'no-tabs': 'off',
			'no-shadow': 'error',
			camelcase: 'off',
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
			'no-irregular-whitespace': 'off',
			'space-before-function-paren': 'off',
			'no-unsafe-optional-chaining': 'error',
			'no-new-native-nonconstructor': 'error',
			'prefer-exponentiation-operator': 'error',
			'nonblock-statement-body-position': 'error',
			'no-console': 'error',
			'no-debugger': 'error',

			// node
			'n/no-missing-import': 'off',
			'n/no-unpublished-import': 'off',
			'n/no-unsupported-features/es-syntax': 'off',

			// unicorn
			...eslintPluginUnicorn.configs['flat/recommended'].rules,
			'unicorn/no-null': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/prefer-module': 'off',
			'unicorn/no-array-for-each': 'off',
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/prefer-starts-ends-with': 'error',
			'unicorn/prefer-exponentiation-operator': 'error',

			// resolves perfectionist conflicts
			'sort-imports': 'off',

			// perfectionist
			...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
			'perfectionist/sort-enums': 'off',
			'perfectionist/sort-intersection-types': 'off',
			'perfectionist/sort-imports': [
				'error',
				{
					type: 'natural',
					order: 'asc',
					groups: [
						'side-effect',
						'type',
						['builtin', 'external'],
						'internal-type',
						'internal',
						['parent-type', 'sibling-type', 'index-type'],
						['parent', 'sibling', 'index'],
						'object',
						'unknown'
					],
					newlinesBetween: 'always',
					internalPattern: ['@/**']
				}
			],
			'perfectionist/sort-union-types': [
				'error',
				{
					type: 'alphabetical',
					order: 'asc',
					ignoreCase: true,
					groups: [
						'nullish',
						'conditional',
						'function',
						'import',
						'intersection',
						'keyword',
						'literal',
						'named',
						'object',
						'operator',
						'tuple',
						'union',
						'unknown'
					]
				}
			],
			'perfectionist/sort-vue-attributes': 'off',
			'perfectionist/sort-object-types': 'off',
			'perfectionist/sort-interfaces': 'off',
			'perfectionist/sort-objects': 'off'
		}
	}
])
