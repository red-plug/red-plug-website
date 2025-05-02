<template>
  <div class="flex justify-center">
    <div class="w-full md:w-3/4">
      <ImageCompare class="shadow-lg rounded-2xl" :dt="dt">
        <template #left>
          <NuxtImg :src="props.leftImage" />
        </template>
        <template #right>
          <NuxtImg :src="props.rightImage" />
        </template>
    </ImageCompare>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  leftImage: String,
  rightImage: String,
})

const dt = ref({
  handle: {
    background: '{primary.600}',
    hoverBackground: '{primary.500}',
  }
})

</script>