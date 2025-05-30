import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { Linter } from 'eslint'

export type StylisticOptions = StylisticCustomizeOptions & {
	overrides?: Linter.Config['rules']
}

export function stylistic(options: StylisticOptions): Linter.Config[]
