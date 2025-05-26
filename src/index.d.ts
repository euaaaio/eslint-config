import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

interface PostanuOptions {
	ignores?: string[]

	typescript?: boolean
	vue?: boolean
	stylistic?: boolean | StylisticCustomizeOptions

	perfectionist?: boolean
}

export function postanu(options: PostanuOptions): Linter.Config[]
