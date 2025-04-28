<template>
  {{ name }}
</template>
<script setup lang="ts">
const route = useRoute()
const { name } = route.params

definePageMeta({
  layout: false,
})

const teamMembers = [
  {
    name: 'Andrés López',
    image: 'https://avatars.githubusercontent.com/u/113704516?v=4',
    url: 'https://github.com/andreslqr',
    email: 'andres@redplug.com.mx',
    phoneNumber: '+523329156122'
  }
];





useSeoMeta({
  title: 'Red Plug | ' + name,
  ogTitle: 'Red Plug | ' + name,
  description: 'Red Plug | ' + name,
  ogDescription: 'Red Plug | ' + name,
  ogImage: '/images/logo.png',
    
})

useHead({
  meta: [
    { name: 'robots', content: 'noindex,nofollow' }
  ]
})
</script>