import { defineConfig } from 'eslint/config'

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
