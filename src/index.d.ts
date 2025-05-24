import type { Linter } from 'eslint'
import type { StylisticOptions } from './types.d.js'

interface PostanuOptions {
	typescript?: boolean
	vue?: boolean
	stylistic?: boolean | StylisticOptions
}

export function postanu(options: PostanuOptions): Linter.Config[]
