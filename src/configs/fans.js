import { defineConfig } from '../utils/index.js'

export function fans() {
	return defineConfig([
		{
			name: 'euaaaio/fans',
			rules: {
				'logical-assignment-operators': 'off',
			},
		},
	])
}
