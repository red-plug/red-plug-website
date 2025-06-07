// https://nuxt.com/docs/api/configuration/nuxt-config
import Button from "primevue/button"
import Theme from "./themes/default"

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
        class: 'scroll-smooth'
      },
      script: [
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': 'XLSOG9giSV+ZdWNOfyrkfA',
          async: true
        }
      ]
    },
  },
  routeRules: {
    '/a': {
      redirect: {
        to: '/?agent=a',
        statusCode: 301
      }
    },
    '/f': {
      redirect: {
        to: '/?agent=f',
        statusCode: 301
      }
    },
    '/g': {
      redirect: {
        to: '/?agent=g',
        statusCode: 301
      }
    },
    '/w': {
      redirect: {
        to: '/?agent=w',
        statusCode: 301
      }
    },
  },
  extends: [
    //['github:red-plug/layers-nutrix', { auth: process.env.GITHUB_TOKEN }]
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-lodash',
    '@nuxtjs/robots',
    '@nuxt/image',
  ],
  nitro: {
    prerender: {
      routes: [
        '/_ipx/s_900x500/images/blog/carlos-alfonso-stylist-portfolio/1.webp',
        '/_ipx/s_900x500/images/blog/red-plug-website-2/1.webp',
        '/_ipx/s_900x500/images/blog/andres-lopez-portfolio/1.webp',
        '/_ipx/s_900x500/images/blog/red-plug-website/1.webp',
        '/_ipx/s_900x500/images/blog/ritmo-astral-website/1.webp',
        '/_ipx/s_1800x1000/images/blog/carlos-alfonso-stylist-portfolio/1.webp',
        '/_ipx/s_1800x1000/images/blog/red-plug-website-2/1.webp',
        '/_ipx/s_1800x1000/images/blog/andres-lopez-portfolio/1.webp',
        '/_ipx/s_1800x1000/images/blog/red-plug-website/1.webp',
        '/_ipx/s_1800x1000/images/blog/ritmo-astral-website/1.webp',
        '/a',
        '/f',
        '/g',
        '/w',
      ]
    }
  },
  primevue: {
    options: {
      theme: {
        preset: Theme,
        options: {
          darkModeSelector: '.dark',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
        }
      },
      ripple: true,
    },
    components: {
      include: [
        'Button',
        'Textarea',
        'Drawer',
        'Fluid',
        'FloatLabel',
        'Avatar'
      ]
    },
    directives: {
      include: [
        'Ripple'
      ]
    },
  },
  colorMode: {
    classSuffix: ''
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
    build: {
      markdown: {
        highlight: { 
          theme: {
            default: 'slack-ochin',
            dark: 'one-dark-pro',
          },
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
      }
    }
  },
  runtimeConfig: {
    serverToken: process.env.SERVER_TOKEN,
    public: {
      apiBase: process.env.API_URL
    }
  },
  site: { 
    url: 'https://redplug.com.mx', 
    name: 'Red Plug' 
  },
})