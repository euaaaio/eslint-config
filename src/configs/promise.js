import pluginPromise from 'eslint-plugin-promise'
import { defineConfig } from 'eslint/config'

export function promise() {
	return defineConfig([{
		name: 'euaaaio/promise',
		plugins: {
			promise: pluginPromise,
		},
		rules: {
			'promise/no-return-wrap': 'error',
			'promise/param-names': 'error',
			'promise/catch-or-return': 'error',
			'promise/no-native': 'off',
			'promise/no-nesting': 'warn',
			'promise/no-promise-in-callback': 'warn',
			'promise/no-callback-in-promise': 'warn',
			'promise/avoid-new': 'off',
			'promise/no-new-statics': 'error',
			'promise/no-return-in-finally': 'warn',
			'promise/valid-params': 'warn',
		},
	}])
}
