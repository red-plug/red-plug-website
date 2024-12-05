import { Vue3Lottie } from 'vue3-lottie'

export default defineNuxtPlugin({
  name: 'vue-lottie',
  async setup(nuxtApp) {
    nuxtApp.vueApp.component('Vue3Lottie', Vue3Lottie)
  }
})