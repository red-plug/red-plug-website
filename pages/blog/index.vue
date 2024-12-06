<template>
    <section id="blog" class="container mx-auto pb-8">
        <h2 class="text-center text-4xl md:text-5xl font-semibold py-8">
            Blog
        </h2>
        <div class="flex gap-x-1 lg:gap-x-4">
            <div class="lg:w-3/12 w-4/12 hidden md:block py-8 px-4 bg-surface-0 dark:bg-surface-900 rounded-lg" v-if="false">
                <div class="opacity-0 transition-opacity duration-500" :class="{'opacity-100': selectedTags.length || search != ''}">
                    <p class="text-right text-sm underline cursor-pointer hover:text-primary" @click="restoreFilters">Limpiar filtros</p>
                </div>
                <BlogFilters :tags="tags" />
            </div>
            <div class="w-full py-8 px-4 bg-surface-0 dark:bg-surface-900 rounded-lg">
                <div class="md:hidden" v-if="false">
                    <div class="opacity-0 transition-opacity duration-500" :class="{'opacity-100': selectedTags.length || search != ''}">
                        <p class="text-right text-sm underline cursor-pointer hover:text-primary mb-4" @click="restoreFilters">Limpiar filtros</p>
                    </div>
                    <BlogFilters />
                </div>
                <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-x-8 gap-x-4 gap-y-8 md:gap-y-4 mt-8 md:mt-0" v-if="entries?.length">
                    <div v-for="entry in entries" class="relative group" :key="entry._path">
                        <img :src="entry.image" :alt="entry.title" class="rounded-lg md:group-hover:scale-105 transition-transform duration-500 border" />
                        <span class="block mt-3 w-0 group-hover:w-3/4 transition-all duration-500 h-0.5 bg-primary-500"></span>
                        <NuxtLink :to="'/blog' + entry._path" class="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-[1] after:content-['']">
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
                        De momento no tenemos ninguna entrada con los parámetros de búsqueda. quiza deberías...
                    </p>
                    <Button class="mt-4" @click="restoreFilters">
                        Reiniciar filtros
                    </Button>
                </div>
                <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-x-8 gap-x-4 gap-y-8 md:gap-y-4" v-if="status == 'wip'">
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
const route = useRoute()

const { search, tags: selectedTags } = useFilters()

selectedTags.value = typeof route.query.tags === 'string' ? route.query.tags.split(',') : []
search.value = typeof route.query.search === 'string' ? route.query.search : ''

const restoreFilters = () => {
    selectedTags.value = []
    search.value = ''
}

const { data: entries, status } = await useAsyncData('blog-entries', () => queryContent().only(['_path', 'title', 'description', 'image'])
                                                                .where({

                                                                    draft: {
                                                                        $not: true
                                                                    },
                                                                    $or: [
                                                                        { title: { $icontains: search.value } },
                                                                        { description: { $icontains: search.value } }
                                                                    ],  
                                                                    tags: selectedTags.value.length ? {
                                                                        $in: selectedTags.value,
                                                                    } : {}
                                                                })
                                                                .sort({
                                                                    weight: -1
                                                                })
                                                                .find(), {
                                                                    server: true,
                                                                    watch: [search, selectedTags]
                                                                }) as any

const { data: tags } = await useAsyncData('blog-entries-tags', () => queryContent().only(['tags'])
                                                                    .where({
                                                                        draft: {
                                                                            $not: true
                                                                        }
                                                                    })
                                                                    .find(), {
                                                                        server: true,
                                                                    }) as any

tags.value = useUniq(useFlatten(useMap(tags.value, 'tags')))

useSeoMeta({
    title: 'Red Plug | Blog',
    ogTitle: 'Red Plug | Blog',
    description: '',
    ogDescription: '',
    ogImage: '/images/blog/red-plug/1.webp',
})

</script>