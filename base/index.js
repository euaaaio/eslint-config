import { fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginN from 'eslint-plugin-n'
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist'
import eslintPluginPreferLet from 'eslint-plugin-prefer-let'
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
			perfectionist: eslintPluginPerfectionist,
			'prefer-let': fixupPluginRules(eslintPluginPreferLet)
		},
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
			'no-irregular-whitespace': 'off',
			'no-unsafe-optional-chaining': 'error',
			'no-new-native-nonconstructor': 'error',
			'prefer-exponentiation-operator': 'error',
			'nonblock-statement-body-position': 'error',
			'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

			// import
			'import/extensions': ['error', 'always', { ignorePackages: true }],

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
			'unicorn/prefer-exponentiation-operator': 'error',

			// resolves perfectionist conflicts
			'import/order': 'off',
			'sort-imports': 'off',

			// perfectionist
			...eslintPluginPerfectionist.configs['recommended-alphabetical'].rules,
			'perfectionist/sort-imports': [
				'error',
				{
					'type': 'natural',
					'order': 'asc',
					'groups': [
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
					'newlines-between': 'always'
				}
			],
			'perfectionist/sort-vue-attributes': 'off',
			'perfectionist/sort-object-types': 'off',
			'perfectionist/sort-interfaces': 'off',
			'perfectionist/sort-objects': 'off'
		}
	}
])
