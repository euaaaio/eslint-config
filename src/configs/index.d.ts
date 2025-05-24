import type { Linter } from 'eslint'

export function javascript(): Linter.Config[]
export function typescript(): Linter.Config[]

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[]
