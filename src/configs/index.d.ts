import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export function ignores(files?: string[]): Linter.Config[]

export function javascript(): Linter.Config[]

interface TypescriptOptions {
	extraFileExtensions?: string[]
}

export function typescript(options: TypescriptOptions): Linter.Config[]

interface VueOptions {
	typescript?: boolean
}

export function vue(options: VueOptions): Linter.Config[]

export type StylisticOptions = StylisticCustomizeOptions & {
	overrides?: Linter.Config['rules']
}

export function imports(): Linter.Config[]
export function promise(): Linter.Config[]
export function unicorn(): Linter.Config[]

export function prettier(): Linter.Config[]
export function stylistic(options: StylisticOptions): Linter.Config[]

export function perfectionist(): Linter.Config[]
