// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
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
  // devServer: {
  //   https: {
  //     key: './certs/server.key',
  //     cert: './certs/server.crt'
  //   }
  // },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://192.168.0.227:8080',
        changeOrigin: true
      }
    }
  }
})
