import eslintConfigPostanu from '@postanu/eslint-config/ts'
import astroParserAstro from 'astro-eslint-parser'
import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginTypeScript from 'typescript-eslint'

export default defineFlatConfig([
	...eslintConfigPostanu,
	...eslintPluginAstro.configs.recommended,
	{
		files: ['*.astro'],
		languageOptions: {
			parser: astroParserAstro,
			parserOptions: {
				extraFileExtensions: ['.astro'],
				project: true,
				parser: eslintPluginTypeScript.parser
			}
		}
	},
	{
		rules: {
			// Looks the same as `perfectionist/sort-astro-attributes`
			'perfectionist/sort-jsx-props': 'off',
			'perfectionist/sort-astro-attributes': [
				'error',
				{
					type: 'natural',
					order: 'asc',
					groups: [
						'name',
						'title',
						'description',
						'multiline',
						'unknown',
						['shorthand', 'astro-shorthand']
					],
					customGroups: {
						name: 'name',
						title: 'title',
						description: 'description'
					}
				}
			]
		}
	}
])
