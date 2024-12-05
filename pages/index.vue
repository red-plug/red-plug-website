<template>
    <section id="welcome">
        <SectionWelcome />
    </section>
    <section id="projects">
        <SectionProjects />
    </section>
    <section id="services">
        <SectionServices />
    </section>
    <section id="contact">
        <SectionContact />
    </section>
</template>
<script setup lang="ts">
useSeoMeta({
    title: 'Red Plug | Inicio',
    ogTitle: 'Red Plug',
    description: '',
    ogDescription: '',
    ogImage: '/images/blog/red-plug/1.webp',
})
</script>