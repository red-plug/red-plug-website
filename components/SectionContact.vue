<template>
  <div class="container mx-auto mt-12 px-4">
    <h2 class="text-center font-serif text-3xl md:text-4xl font-semibold mt-8">
      ¿Quieres cotizar o tienes alguna duda?
    </h2>
    <h3 class="text-center mt-4 text-xl font-medium">
      Escríbenos
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-8 lg:mt-0">
      <div class="col-span-1 flex items-center">
        <form class="w-full mt-8 md:mt-0" @submit.prevent="submitMessage">
          <Fluid>
            <FloatLabel>
              <Textarea id="message" v-model="message" rows="10" cols="30" class="resize-none" required />
              <label for="message">Tu mensaje:</label>
            </FloatLabel>
          </Fluid>
          <div class="flex justify-end">
            <Button type="submit"
              class="px-8 w-full lg:w-auto transition-transform md:hover:scale-110 duration-300 md:hover:-translate-x-1 md:hover:translate-y-1 dark:text-white"
              aria-label="Enviar formulario">
              Enviar
            </Button>
          </div>
        </form>
      </div>
      <div class="col-span-1 flex justify-center items-center">
        <ClientOnly>
          <Vue3Lottie animationLink="/animations/animation-06.json" width="80%" height="80%" class="hidden md:block"
            noMargin />
          <Vue3Lottie animationLink="/animations/animation-06.json" width="50%" height="50%" class="block md:hidden"
            noMargin />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { message } = useMessage()

const submitMessage = () => {
  window.open(`https://wa.me/523329156122?text=${message.value}`, '_blank')
}
</script>