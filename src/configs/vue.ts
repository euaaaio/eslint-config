import typescriptEslintParser from '@typescript-eslint/parser'
import { Linter } from 'eslint'
import eslintPluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[] {
	return defineConfig([
		{
			name: 'postanu/vue',
			extends: [...eslintPluginVue.configs['flat/recommended']],
			languageOptions: {
				parserOptions: {
					parser: options.typescript ? typescriptEslintParser : null
				}
			}
		}
	])
}
