<template>
  <article @click="contact" v-if="agent" class="fixed w-10 h-10 right-6 bottom-8 bubble-button rounded-full cursor-pointer">
    <NuxtImg :src="agent.image" class="w-10 h-10 rounded-full" />
    <Transition>
      <span class="block absolute -left-32 bottom-1 rounded-l-md rounded-tr-md bg-primary-700 text-gray-50 px-2 py-1 text-sm" v-if="showMessage">
        Cotiza conmigo
      </span>
    </Transition>
  </article>
</template>

<script lang="ts" setup>
const { query } = useRoute()

const { data: agent } = await useAsyncData(`team/${query.agent}`, () => queryCollection('team').where('id', '=', `team/team/${query.agent}.json`).first())

const showMessage = ref(false)


const contact = () => {
  window.open(`https://wa.me/523329156122?Estoy%20interesando%20en%20sus%20servicios`, '_blank')
}

onMounted(async () => {
  setTimeout(() => showMessage.value = true, 1500)
  setTimeout(() => showMessage.value = false, 5000)
})

</script>

<style scoped>
.bubble-button {
  inset-block-end: 80px;
  inset-inline-end: 20px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>