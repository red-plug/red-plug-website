<template>
  <div class="group px-4 py-6 border rounded-lg shadow-md hover:shadow-lg transition-al duration-300 cursor-pointer">
    <div class="flex justify-center">
      <Icon :name="props.icon" class="text-6xl transition-transform group-hover:scale-125 group-hover:-translate-y-1 mt-4 text-primary-500 mx-auto" />
    </div>
    <SparklesText
      :text="props.title"
      :colors="{ first: '#FF2638', second: '#5EEAD4' }"
      :sparkles-count="10"
      class="my-4 text-center font-serif font-semibold hidden group-hover:block"
    />
    <h3 v-text="props.title" class="text-center text-2xl font-semibold my-4 font-serif block group-hover:hidden"></h3>
    <p v-text="props.description" class="text-md mt-4"></p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  icon: string;
}>();
</script>