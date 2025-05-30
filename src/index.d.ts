import type { Linter } from 'eslint'
import type { StylisticOptions } from './configs'

interface DefineConfigOptions {
	ignores?: string[]

	typescript?: boolean
	vue?: boolean

	stylistic?: boolean | StylisticOptions
	prettier?: boolean

	unicorn?: boolean
	perfectionist?: boolean
}

export function defineConfig(
	options: DefineConfigOptions,
	...configs: Linter.Config[]
): Linter.Config[]
