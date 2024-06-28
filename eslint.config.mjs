import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    // files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // 'no-console': 'off' // allow console.log in TypeScript files
      'vue/html-self-closing': 0,
    },
  },
)
