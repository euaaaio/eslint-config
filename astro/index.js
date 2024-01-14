let { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	extends: [
		'../ts',
		'plugin:astro/recommended'
	],
	'overrides': [
		{
			'files': ['*.astro'],
			'parser': 'astro-eslint-parser',
			'parserOptions': {
				'parser': '@typescript-eslint/parser',
				'extraFileExtensions': ['.astro']
			}
		}
	]
})
