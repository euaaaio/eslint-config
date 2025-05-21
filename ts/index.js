import eslintPluginTypeScript from 'typescript-eslint'

import baseConfig from '../base/index.js'

export default [
	...baseConfig,
	{
		rules: {
			// resolves conflicts with base config
			'no-unused-vars': 'off',
			'func-call-spacing': 'off'
		}
	},
	{
		files: ['*.ts', '**/*.ts'],
		languageOptions: {
			parser: eslintPluginTypeScript.parser,
			parserOptions: {
				project: true
			}
		},
		plugins: {
			'@typescript-eslint': eslintPluginTypeScript.plugin
		},
		rules: {
			...eslintPluginTypeScript.configs.strictTypeChecked.rules,
			...eslintPluginTypeScript.configs.stylisticTypeChecked.rules,

			// resolves perfectionist conflicts
			'@typescript-eslint/sort-type-constituents': 'off',
			'@typescript-eslint/adjacent-overload-signatures': 'off'
		}
	}
]
