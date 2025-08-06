export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  // Runtime config for API client
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
    }
  },

  // Auto-import components from shared packages
  components: [
    '~/components',
    {
      path: '~/../packages/vue-components/src/components',
      prefix: 'Base'
    }
  ],

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: true
  }
}) 