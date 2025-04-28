<template>
  <div class="mx-auto px-4 py-4 md:py-10 font-sans antialiased md:max-w-5xl md:px-8">
    <div class="relative grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-3">
      <div class="col-span-1 md:col-span-2 flex justify-center">
        <div class="relative h-64 sm:h-72 max-w-lg md:h-64 w-full">
          <Motion v-for="(presentationItem, index) in props.presentation" :key="presentationItem.image" as="div" :initial="{
            opacity: 0,
            scale: 0.9,
            z: -100,
            rotate: randomRotateY(),
          }" :animate="{
                opacity: isActive(index) ? 1 : 0.7,
                scale: isActive(index) ? 1 : 0.95,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : presentation.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }" :exit="{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }" :transition="{
                duration: 0.4,
                ease: 'easeInOut',
              }" class="absolute inset-0 origin-bottom">
            <NuxtLink :to="presentationItem.url" class="absolute inset-0">
              <NuxtImg :src="presentationItem.image" :alt="presentationItem.title" width="900" height="500" :draggable="false"
                class="size-full rounded-3xl object-cover object-center" />
            </NuxtLink>
          </Motion>
        </div>
      </div>
      <div class="flex flex-col justify-between py-4">
        <Motion :key="active" as="div" :initial="{
          y: 20,
          opacity: 0,
        }" :animate="{
              y: 0,
              opacity: 1,
            }" :exit="{
              y: -20,
              opacity: 0,
            }" :transition="{
              duration: 0.2,
              ease: 'easeInOut',
            }">
          <h3 class="text-2xl font-bold text-black dark:text-white">
            {{ props.presentation[active].title }}
          </h3>
          <Motion as="p" class="mt-4 text-lg text-gray-500 dark:text-neutral-300">
            <Motion v-for="(word, index) in activePresentationItemDescription" :key="index" as="span" :initial="{
              filter: 'blur(10px)',
              opacity: 0,
              y: 5,
            }" :animate="{
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                }" :transition="{
                  duration: 0.2,
                  ease: 'easeInOut',
                  delay: 0.02 * index,
                }" class="inline-block">
              {{ word }}&nbsp;
            </Motion>
          </Motion>
          <div class="items-center justify-center my-6 hidden md:flex">
            <Button as="router-link" :to="props.presentation[active].url" class="text-surface-50">
              Ver más
            </Button>
          </div>
        </Motion>
        <div class="flex justify-evenly md:justify-start gap-4 pt-4">
          <button
            class="group/button flex h-16 w-16 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handlePrev">
            <Icon name="heroicons:arrow-left"
              class="text-2xl md:text-lg text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            class="group/button flex h-16 w-16 md:h-8 md:w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handleNext">
            <Icon name="heroicons:arrow-right"
              class="text-2xl md:text-lg text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectsCollectionItem } from "@nuxt/content";
import { Motion } from "motion-v"

interface Props {
  presentation?: ProjectsCollectionItem[],
  autoplay?: boolean,
  duration?: number,
}

const props = withDefaults(defineProps<Props>(), {
  presentation: () => [],
  autoplay: () => false,
  duration: 5000,
})

const active = ref(0)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const interval = ref<any>()

const activePresentationItemDescription = computed(() => {
  return props.presentation[active.value].description.split(" ")
})

onMounted(() => {
  if (props.autoplay) {
    interval.value = setInterval(handleNext, props.duration)
  }
})

onUnmounted(() => {
  if (!interval.value) {
    clearInterval(interval.value)
  }
})

function handleNext() {
  active.value = (active.value + 1) % props.presentation.length
}

function handlePrev() {
  active.value = (active.value - 1 + props.presentation.length) % props.presentation.length
}

function isActive(index: number) {
  return active.value === index
}

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10
}
</script>