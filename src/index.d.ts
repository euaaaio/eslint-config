import type { Linter } from 'eslint'

interface PostanuOptions {
	typescript?: boolean
	vue?: boolean
}

export function postanu(options: PostanuOptions): Linter.Config[]
