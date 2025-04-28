<template>
  <ul class="gap-x-4 px-4 font-serif">
    <li v-for="item in items" @click="$emit('itemClick')">
      <Button as="router-link" label="Router" :to="item.ref" text severity="contrast" class="w-full md:w-auto font-extralight" :aria-label="`Navegar a ${item.display}`">
        <span v-text="item.display"></span>
      </Button>
    </li>
  </ul>
</template>
<script setup lang="ts">
interface Link {
  ref: string
  display: string
}

const items: Link[] = [
  {
    ref: '/',
    display: 'Inicio'
  },
  {
    ref: '/blog',
    display: 'Blog'
  },
  {
    ref: '/#services',
    display: 'Servicios'
  },
  {
    ref: '/#contact',
    display: 'Contacto'
  }
]

</script>