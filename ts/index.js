import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginTypeScript from 'typescript-eslint'

import baseConfig from '../base/index.js'

export default defineFlatConfig([
	...baseConfig,
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
])
