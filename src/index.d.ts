import type { Linter } from 'eslint'
import type { StylisticOptions } from './configs'

interface DefineConfigOptions {
	ignores?: string[]

	/**
	 * @link https://typescript-eslint.io/
	 * @default false
	 */
	typescript?: boolean

	/**
	 * @link https://eslint.vuejs.org/
	 * @default false
	 */
	vue?: boolean

	/**
	 * @link https://eslint.style
	 * @default false
	 *
	 * Note: This option is ignored when prettier is enabled.
	 */
	stylistic?: boolean | StylisticOptions

	/**
	 * @link https://github.com/prettier/eslint-plugin-prettier
	 * @default false
	 *
	 * When enabled, disables stylistic formatting rules to avoid conflicts.
	 */
	prettier?: boolean

	/**
	 * @link https://github.com/sindresorhus/eslint-plugin-unicorn
	 * @default true
	 */
	unicorn?: boolean

	/**
	 * @link https://perfectionist.dev
	 * @default false
	 */
	perfectionist?: boolean
}

export function defineConfig(
	options: DefineConfigOptions,
	...configs: Linter.Config[]
): Linter.Config[]
