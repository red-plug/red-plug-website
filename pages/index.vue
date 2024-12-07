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
    description: 'Red Plug es una organización que busca impulsar el negocio de las personas en internet, ofreciendo software modular y escalable, tu primer proyecto no tiene porque ser una limitante, te ayudamos a escalar a tu ritmo',
    ogDescription: 'Red Plug ofrece software modular y escalable, ¿quieres empezar por algo pequeño y poco a poco escalarlo? somos tu mejor opción',
    ogImage: '/images/blog/red-plug-website/1.webp',
})
</script>