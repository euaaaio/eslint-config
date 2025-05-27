import type { Linter } from 'eslint'
import type { StylisticOptions } from './configs'

interface PostanuOptions {
	ignores?: string[]

	typescript?: boolean
	vue?: boolean
	stylistic?: boolean | StylisticOptions

	perfectionist?: boolean
}

export function postanu(options: PostanuOptions): Linter.Config[]
