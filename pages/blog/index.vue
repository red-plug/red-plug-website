<template>
    <section id="blog" class="container mx-auto pb-8">
        <h2 class="text-center text-4xl md:text-5xl font-semibold py-8">
            Blog
        </h2>
        <div class="flex gap-x-1 lg:gap-x-4">
            <div class="w-full py-8 px-4 bg-surface-0 dark:bg-surface-900 rounded-lg">
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-x-8 gap-x-4 gap-y-8 md:gap-y-4 mt-8 md:mt-0" v-if="entries?.length">
                    <div v-for="entry in entries" class="relative group" :key="entry.id">
                        <img :src="entry.image" :alt="entry.title" class="rounded-lg md:group-hover:scale-105 transition-transform duration-500 border" />
                        <span class="block mt-3 w-0 group-hover:w-3/4 transition-all duration-500 h-0.5 bg-primary-500"></span>
                        <NuxtLink :to="entry.path" class="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-[1] after:content-['']">
                            <h3 v-text="entry.title" class="mt-1 text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-500"></h3>
                        </NuxtLink>
                        <p v-text="entry.description" class="text-sm md:text-base"></p>
                    </div>
                </div>
                <div class="w-full flex items-center flex-col" v-else>
                    <ClientOnly>
                        <Vue3Lottie animationLink="/animations/animation-08.json" width="50%" height="50%" class="" noMargin />
                    </ClientOnly>
                    <h3 class="text-2xl md:text-3xl font-bold">
                        Aún no hemos escrito lo que buscas
                    </h3>
                    <p class="mt-2">
                        De momento no tenemos ninguna entrada con los parámetros de búsqueda.
                    </p>
                </div>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-x-8 gap-x-4 gap-y-8 md:gap-y-4" v-if="status == 'pending'">
                    <div v-for="n in 9">
                        <Skeleton width="100%" height="6.75rem"></Skeleton>
                        <Skeleton width="90%" class="mt-4" height="1.75rem"></Skeleton>
                        <Skeleton width="100%" class="mt-2"></Skeleton>
                        <Skeleton width="90%" class="mt-2"></Skeleton>
                        <Skeleton width="95%" class="mt-2"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const { data: entries, status } = await useAsyncData('blog-entries', () => queryCollection('blog')
                                                                                .select('id', 'path', 'title', 'description', 'image', 'weight')
                                                                                .order('weight', 'DESC')
                                                                                .all())

useSeoMeta({
    title: 'Red Plug | Blog',
    ogTitle: 'Red Plug | Blog',
    description: 'Explora nuestras entradas de blog donde podrás enterarte y aprender acerca de como la organización Red Plug funciona y colabora con sus aliados y clientes',
    ogDescription: 'Explora nuestras entradas de blog donde podrás enterarte y aprender acerca de como la organización Red Plug funciona y colabora con sus aliados y clientes',
    ogImage: '/images/blog/red-plug/1.webp',
})

</script>