import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export function ignores(files?: string[]): Linter.Config[]

export function javascript(): Linter.Config[]
export function typescript(): Linter.Config[]

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[]

export function stylistic(options: StylisticCustomizeOptions): Linter.Config[]
export function imports(): Linter.Config[]
export function promise(): Linter.Config[]
export function perfectionist(): Linter.Config[]
