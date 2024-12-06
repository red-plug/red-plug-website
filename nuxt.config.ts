// https://nuxt.com/docs/api/configuration/nuxt-config
import Theme from "./themes/default"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  extends: [
    //['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-lodash'
  ],
  primevue: {
    options: {
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      },
      ripple: true,
    },
  },
  colorMode: {

  },
  icon: {
    clientBundle: {
      icons: [
        'heroicons:bars-3',
        'heroicons:computer-desktop',
        'heroicons:sun',
        'heroicons:moon',
        'heroicons:cube-transparent',
        'heroicons:document-arrow-up',
        'heroicons:shopping-cart',
        'heroicons:server-stack'
      ]
    }
  },
  content: {
    highlight: {
        theme: 'github-dark',
        langs: [
            'js',
            'json',
            'html',
            'php',
            'sql',
            'vue-html',
            'vue',
            'bash',
            'blade'
        ]
    }
  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL
    }
  }
})