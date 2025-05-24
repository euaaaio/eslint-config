import type { Linter } from 'eslint'
import type { StylisticOptions } from '../types.d.js'

export function javascript(): Linter.Config[]
export function typescript(): Linter.Config[]

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[]

export function stylistic(options: StylisticOptions): Linter.Config[]
