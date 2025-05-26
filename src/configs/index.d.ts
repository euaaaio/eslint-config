import type { Linter } from 'eslint'
import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'

export function javascript(): Linter.Config[]
export function typescript(): Linter.Config[]

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[]

export function stylistic(options: StylisticCustomizeOptions): Linter.Config[]
export function imports(): Linter.Config[]
export function promise(): Linter.Config[]
