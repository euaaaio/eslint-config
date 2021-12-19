module.exports = {
	extends: [
		'../base'
	],
	plugins: [
		'@typescript-eslint'
	],
	overrides: [
		{
			files: ['*.ts', '*.vue'],
			extends: [
				'plugin:@typescript-eslint/recommended'
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				tsconfigRootDir: process.cwd(),
				project: './tsconfig.json'
			},
			rules: {
				// fix redefined
				'prefer-const': 'off',

				// off
				'semi': 'off',
				'indent': 'off',
				'brace-style': 'off',
				'no-loop-func': 'off',
				'no-redeclare': 'off',
				'dot-notation': 'off',
				'comma-dangle': 'off',
				'comma-spacing': 'off',
				'keyword-spacing': 'off',
				'func-call-spacing': 'off',
				'no-use-before-define': 'off',
				'no-useless-constructor': 'off',
				'space-before-function-paren': 'off',

				// redefine js → ts
				'@typescript-eslint/semi': ['error', 'never'],
				'@typescript-eslint/indent': ['error', 'tab'],
				'@typescript-eslint/brace-style': ['error', '1tbs', {
					'allowSingleLine': true
				}],
				'@typescript-eslint/no-loop-func': 'error',
				'@typescript-eslint/no-redeclare': 'error',
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/comma-dangle': ['error', 'never'],
				'@typescript-eslint/comma-spacing': ['error', {
					before: false,
					after: true
				}],
				'@typescript-eslint/keyword-spacing': ['error', {
					before: true,
					after: true
				}],
				'@typescript-eslint/func-call-spacing': ['error', 'never'],
				'@typescript-eslint/no-use-before-define': ['error', {
					functions: false,
					variables: false,
					classes: false
				}],
				'@typescript-eslint/no-useless-constructor': 'error',
				'@typescript-eslint/space-before-function-paren': ['error', 'always'],

				// main
				'@typescript-eslint/array-type': ['error', {
					default: 'array-simple',
					readonly: 'array-simple'
				}],
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/member-delimiter-style': ['error', {
					multiline: { delimiter: 'none', requireLast: false }
				}],
				'@typescript-eslint/type-annotation-spacing': ['error', {
					before: false,
					after: true,
					overrides: { arrow: { before: true } }
				}],
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-misused-promises': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/restrict-plus-operands': 'error',
				'@typescript-eslint/no-unnecessary-condition': 'error',
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/lines-between-class-members': 'error',
				'@typescript-eslint/no-confusing-void-expression': 'error',
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unnecessary-type-constraint': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error'
			}
		}
	]
}
