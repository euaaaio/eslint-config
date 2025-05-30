import pluginNode from 'eslint-plugin-n'
import { defineConfig } from 'eslint/config'

export function node() {
	return defineConfig([
		{
			name: 'euaaaio/node',
			plugins: {
				n: pluginNode,
			},
			rules: {
				'n/global-require': 'error',
				'n/handle-callback-err': ['error', '^(err|error)$'],
				'n/no-deprecated-api': 'error',
				'n/no-exports-assign': 'error',
				'n/no-extraneous-require': 'error',
				'n/no-missing-require': 'error',
				'n/no-new-require': 'error',
				'n/no-path-concat': 'error',
				'n/no-unpublished-require': 'error',
				'n/no-unsupported-features/es-builtins': 'error',
				'n/no-unsupported-features/es-syntax': [
					'error',
					{
						ignores: ['modules', 'dynamicImport'],
					},
				],
				'n/no-unsupported-features/node-builtins': 'error',
				'n/prefer-global/buffer': ['error', 'never'],
				'n/prefer-global/process': ['error', 'never'],
				'n/prefer-node-protocol': 'error',
				'n/process-exit-as-throw': 'error',
			},
		},
	])
}
