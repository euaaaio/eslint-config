import type { Linter } from 'eslint'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

interface PostanuOptions {
	ignores?: string[]

	typescript?: boolean
	vue?: boolean
	stylistic?: boolean | StylisticCustomizeOptions
}

export function postanu(options: PostanuOptions): Linter.Config[]
