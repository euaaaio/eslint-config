import pluginOxlint from 'eslint-plugin-oxlint'
import { defineConfig } from 'eslint/config'
import { typescript } from './typescript.js'

export function oxlint(options = {}) {
	const {
		oxlintConfigFile = './.oxlintrc.json',
		typescriptOptions,
	} = options

	const oxlintConfigs = pluginOxlint.buildFromOxlintConfigFile(oxlintConfigFile).map((config) => {
		return {
			...config,
			name: `euaaaio/${config.name}`,
		}
	})

	const typescriptConfigs = (typescriptOptions ? typescript(typescriptOptions) : []).map((config) => {
		return {
			...config,
			files: ['**/*.d.ts'],
			name: 'euaaaio/oxlint/dts',
		}
	})

	const configs = [...oxlintConfigs]

	if (typescriptConfigs.length > 0) {
		configs.push(...typescriptConfigs)
	}

	return defineConfig(configs)
}
