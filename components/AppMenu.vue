<template>
    <ul class="lg:gap-x-8 gap-x-4">
        <li v-for="item in items" @click="$emit('itemClick')">
            <Button as="router-link" label="Router" :to="item.ref" text severity="secondary" class="w-full md:w-auto"  :aria-label="`Navegar a ${item.display}`">
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
        ref: '/#projects',
        display: 'Proyectos'
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