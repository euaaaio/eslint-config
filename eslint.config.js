import { defineFlatConfig } from 'eslint-define-config'

import config from './vue/index.js'

export default defineFlatConfig([
	...config
])
