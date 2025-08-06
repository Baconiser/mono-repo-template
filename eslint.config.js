import eslintConfig from '@monorepo/eslint-config'

export default [
  ...eslintConfig,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.output/**',
      '.nuxt/**',
      'packages/api-client/src/generated/**'
    ]
  }
] 