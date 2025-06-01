import pluginOxlint from 'eslint-plugin-oxlint'
import { defineConfig } from 'eslint/config'

export function oxlint(options = {}) {
	const { oxlintConfigFile = './.oxlintrc.json' } = options

	const oxlintConfigs = pluginOxlint.buildFromOxlintConfigFile(oxlintConfigFile).map((config) => {
		return {
			...config,
			name: `euaaaio/${config.name}`,
		}
	})

	return defineConfig([
		...oxlintConfigs,
	])
}
