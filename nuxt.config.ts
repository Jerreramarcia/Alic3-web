// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    // '@nuxt/scripts',
    '@nuxt/ui',
    '@pinia/nuxt'
    // '@nuxt/eslint'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    https: {
      key: './certs/server.key',
      cert: './certs/server.crt'
    }
  }
})
