import { defineFlatConfig } from 'eslint-define-config'
import eslintPluginVuePug from 'eslint-plugin-vue-pug'

import vueConfig from '../vue/index.js'

export default defineFlatConfig([
	...vueConfig,
	{
		name: 'vue-pug',
		files: ['*.vue', '**/*.vue'],
		languageOptions: {
			parserOptions: {
				templateTokenizer: { pug: 'vue-eslint-parser-template-tokenizer-pug' }
			}
		},
		plugins: {
			'vue-pug': eslintPluginVuePug
		},
		rules: {
			...eslintPluginVuePug.configs.base.rules,
			...eslintPluginVuePug.configs['vue3-essential'].rules,
			...eslintPluginVuePug.configs['vue3-strongly-recommended'].rules,
			...eslintPluginVuePug.configs['vue3-recommended'].rules
		}
	}
])
