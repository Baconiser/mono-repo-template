import tailwindConfig from '@monorepo/tailwind-config'

export default {
  ...tailwindConfig,
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    '../packages/vue-components/src/**/*.{js,ts,vue}'
  ]
} 