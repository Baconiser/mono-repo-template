import { theme } from './theme.js'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,vue}',
    './plugins/**/*.{js,ts,jsx,tsx,vue}',
    './app.vue',
    './nuxt.config.{js,ts}',
    '../packages/vue-components/**/*.{js,ts,jsx,tsx,vue}'
  ],
  theme,
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}

export { theme } 