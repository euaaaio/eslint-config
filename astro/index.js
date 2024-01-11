let { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	extends: [
		'plugin:astro/recommended',
		'../ts'
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
			}
		}
	]
})
