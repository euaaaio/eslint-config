# @euaaaio/eslint-config

Opinionated and flexible ESLint shareable config with first-class TypeScript support, built as a pure JavaScript configuration with `.d.ts` files for enhanced developer experience.

**Default plugins:** [`@eslint/js`][eslint-js], [`@typescript-eslint`][typescript-eslint], [`import-x`][import-x], [`promise`][promise], [`n`][node], [`de-morgan`][de-morgan], [`unicorn`][unicorn]

**Optional plugins:** [`vue`][vue], [`astro`][astro], [`vitest`][vitest], [`prettier`][prettier], [`@stylistic`][stylistic], [`perfectionist`][perfectionist], [`vuejs-accessibility`][vue-a11y]

This config uses modern [ESLint flat config][flat-config] format and can be installed directly from the repository using `pnpm i github:euaaaio/eslint-config`, thanks to our pure JavaScript implementation with TypeScript definitions provided via `.d.ts` files.

✨ **First-class TypeScript support** with automatic type generation using [`eslint-typegen`][eslint-typegen] for the best possible developer experience.

🔍 **[Inspect rules][inspector]**


## Table of Contents

- [@euaaaio/eslint-config](#euaaaioeslint-config)
	- [Table of Contents](#table-of-contents)
	- [Usage](#usage)
	- [Customization](#customization)
		- [Available Options](#available-options)
		- [Ignores](#ignores)
		- [Formatting (Prettier and Stylistic)](#formatting)
		- [Vue Configuration](#vue-configuration)
		- [Custom Configurations](#custom-configurations)
	- [Framework Support](#framework-support)
		- [Astro](#astro)
	- [Oxlint Support](#oxlint-support)
	- [Inspect](#inspect)
	- [Inspired By](#inspired-by)
	- [Contributing (TODO)](#contributing-todo)


## Usage

Install the package:

```bash
pnpm add -D @euaaaio/eslint-config
```

Create `eslint.config.js` in your project root:

```javascript
import { defineConfig } from '@euaaaio/eslint-config'

export default defineConfig({
  // Enable features based on your project
  typescript: true,
  vue: true,
  prettier: true,
})
```


## Customization

### Available Options

```typescript
interface DefineConfigOptions {
  // Custom ignore patterns
  ignores?: string[]

  // Enable TypeScript support
  typescript?: boolean // default: false

  // Enable Vue.js support
  vue?: boolean | VueOptions // default: false

  // Enable Astro support
  astro?: boolean // default: false

  // Enable test files support (Vitest)
  test?: boolean // default: false

  // Enable stylistic formatting rules
  stylistic?: boolean | StylisticOptions // default: false

  // Enable Prettier integration
  prettier?: boolean // default: false

  // Enable unicorn rules (opinionated best practices)
  unicorn?: boolean // default: true

  // Enable import/export sorting
  perfectionist?: boolean // default: false

  // Enable oxlint support for better performance
  oxlint?: boolean | OxlintOptions // default: false
}
```


### Ignores

By default, the config ignores common directories and files. You can extend the ignore patterns:

```javascript
export default defineConfig({
  ignores: [
    'custom-dist/**',
    'legacy-code/**',
  ]
})
```


### Formatting

#### Prettier vs Stylistic

You can choose between Prettier and ESLint Stylistic for code formatting:

- **Prettier** (`prettier: true`): Uses Prettier for formatting, disables conflicting stylistic rules
- **Stylistic** (`stylistic: true`): Uses ESLint Stylistic rules for formatting (ignored when Prettier is enabled)


#### Stylistic Options

When using `stylistic: true`, you can customize formatting rules. See [StylisticOptions][stylistic-options] for all available options:

```javascript
export default defineConfig({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true, // Enable JSX formatting rules
  }
})
```


#### Prettier Configuration

Prettier can be configured through standard `.prettierrc` files or `prettier.config.js`. The ESLint config will automatically detect and respect your Prettier settings.


### Vue Configuration

Enable Vue.js support with additional options:

```javascript
export default defineConfig({
  vue: {
    a11y: true, // Enable vue-a11y rules
  }
})
```


### Custom Configurations

You can extend the configuration with additional ESLint configs:

```javascript
import { defineConfig } from '@euaaaio/eslint-config'

export default defineConfig(
  {
    typescript: true,
    vue: true,
  },
  // Custom overrides
  {
    files: ['**/*.test.ts'],
    rules: {
      'no-console': 'off',
    },
  },
  // Disable specific rule for certain files
  {
    files: ['scripts/**'],
    rules: {
      'unicorn/prefer-top-level-await': 'off',
    },
  }
)
```


## Framework Support

### Astro

Full support for [Astro][astro-site] projects with TypeScript integration:

```javascript
export default defineConfig({
  typescript: true,
  astro: true,
})
```

This enables linting for `.astro` files with proper TypeScript support and Astro-specific rules.


## Oxlint Support

This config includes built-in support for [oxlint][oxlint] - a blazing-fast JavaScript linter written in Rust by [void(0)][voidzero]. Oxlint is **50-100 times faster** than ESLint and designed for performance-critical workflows, making it perfect for large codebases and CI environments.

> **Note:** Oxlint doesn't support all ESLint rules yet. Check the [generated list of unsupported rules][unsupported-rules] to see which rules from this config are not available in oxlint.


### Enabling Oxlint

1. **Install oxlint:**
   ```bash
   pnpm add -D oxlint
   ```

2. **Create your ESLint config** as described above

3. **Generate oxlint configuration** from your ESLint config:
   ```bash
   pnpx @oxlint/migrate ./eslint.config.js
   ```

4. **Enable oxlint** in your configuration:
   ```javascript
   export default defineConfig({
     typescript: true,
     vue: true,
     oxlint: true, // Enable oxlint support
   })
   ```

   For TypeScript projects, you might want to enable DTS checking:
   ```javascript
   export default defineConfig({
     typescript: true,
     oxlint: {
       dts: true, // Check .d.ts files with TypeScript rules
     },
   })
   ```


## Inspect

You can inspect your ESLint configuration using the interactive configuration inspector:

```bash
pnpx @eslint/config-inspector --config eslint.config.js
```

Or add it as a script to your `package.json`:

```json
{
  "scripts": {
    "lint:inspect": "pnpx @eslint/config-inspector --config eslint.config.js"
  }
}
```


## Inspired By

This configuration is inspired by and builds upon the excellent work of:

- [@logux/eslint-config][logux-config]
- [@sxzz/eslint-config][sxzz-config]
- [@antfu/eslint-config][antfu-config]


## Contributing (TODO)

This package can be installed directly from the repository using `pnpm add -D github:euaaaio/eslint-config`, thanks to our pure JavaScript implementation with TypeScript definitions provided via `.d.ts` files - no compilation step required.

All versions follow [Semantic Versioning][semver].


<!-- Link definitions -->
[eslint-js]: https://eslint.org/docs/latest/rules/
[typescript-eslint]: https://typescript-eslint.io/
[import-x]: https://github.com/un-es/eslint-plugin-import-x
[promise]: https://github.com/eslint-community/eslint-plugin-promise
[node]: https://github.com/eslint-community/eslint-plugin-n
[de-morgan]: https://github.com/jonathanharrell/eslint-plugin-de-morgan
[unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[vue]: https://eslint.vuejs.org/
[astro]: https://ota-meshi.github.io/eslint-plugin-astro/
[vitest]: https://github.com/vitest-dev/eslint-plugin-vitest
[prettier]: https://github.com/prettier/eslint-plugin-prettier
[stylistic]: https://eslint.style/
[perfectionist]: https://perfectionist.dev/
[vue-a11y]: https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/
[flat-config]: https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file
[eslint-typegen]: https://github.com/antfu/eslint-typegen
[inspector]: https://eslint-config.euaaaio.ru/
[stylistic-options]: https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/dts/options.d.ts
[astro-site]: https://astro.build/
[oxlint]: https://oxc.rs/docs/guide/usage/linter.html
[voidzero]: https://voidzero.dev/
[unsupported-rules]: ./docs/oxlint/UNSUPPORTED-RULES.md
[antfu-config]: https://github.com/antfu/eslint-config
[sxzz-config]: https://github.com/sxzz/eslint-config
[logux-config]: https://github.com/logux/eslint-config
[semver]: https://semver.org/