<template>
  <div class="container mx-auto mt-16" v-if="projects">
    <h2 class="text-center font-serif text-3xl md:text-4xl font-semibold mt-8">
      Nuestros proyectos
    </h2>
    <div class="mt-8">
      <ClientOnly>
    <AnimatedPresentation :presentation="projects" autoplay :duration="3000"/>
  </ClientOnly>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data: projects } = await useAsyncData('home-entries', () => queryCollection('projects')
                                                                .order('weight', 'ASC')
                                                                .limit(15)
                                                                .all())
</script>