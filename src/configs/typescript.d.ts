import type { Linter } from 'eslint'

export interface TypescriptOptions {
	extraFileExtensions?: string[]
}

export function typescript(options?: TypescriptOptions): Linter.Config[]
