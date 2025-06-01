import type { Linter } from 'eslint'

export interface OxlintOptions {
	oxlintConfigFile: string
}

export function oxlint(options?: OxlintOptions): Linter.Config[]
