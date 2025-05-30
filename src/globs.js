export const GLOB_TS = '**/*.ts'

export const GLOB_VUE = '**/*.vue'

export const GLOB_EXCLUDE = [
	// Defaults
	'**/node_modules',
	'**/dist',
	'**/LICENSE*',
	'**/CHANGELOG*.md',

	// IDE files
	'**/.vscode',
	'**/.idea',

	// Lock files
	'**/package-lock.json',
	'**/pnpm-lock.yaml',
	'**/yarn.lock',
	'**/bun.lockb',

	// Test files
	'**/temp',
	'**/coverage',
	'**/fixtures',
	'**/__snapshots__',

	// Vendor files
	'**/.vitepress/cache',
	'**/.nuxt',
	'**/.next',
	'**/.vercel',
	'**/.nitro',
]
