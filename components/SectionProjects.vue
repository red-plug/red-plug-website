<template>
    <div v-if="entries && entries.length">
        <h2 class="text-3xl md:text-4xl text-center font-semibold mt-8">
            Nuestros proyectos
        </h2>
        <div class="container mx-auto mt-8 flex flex-col items-center px-8 md:px-0">
            <Galleria :value="entries" :numVisible="5" containerClass="max-w-2xl" :transitionInterval="3000" showItemNavigators showItemNavigatorsOnHover>
                <template #item="slotProps">
                    <NuxtLink :to="'/blog' + slotProps.item._path">
                        <img :src="slotProps.item.image" :alt="slotProps.item.title" class="w-full block" />
                    </NuxtLink>
                </template>
                <template #thumbnail="slotProps">
                    <img :src="slotProps.item.image" :alt="slotProps.item.title" class="block" />
                </template>
                <template #caption="slotProps">
                    <div class="w-full static">
                        <div class="text-xl mb-2 font-bold font-serif">{{ slotProps.item.title }}</div>
                        <p class="text-white">{{ slotProps.item.description }}</p>
                        <div class="absolute right-1 top-1">
                            <Button as="router-link" label="Router" :to="'/blog' + slotProps.item._path" size="small" severity="secondary">
                                Ver más
                            </Button>
                        </div>
                    </div>

                </template>
            </Galleria>

            <Button class="mt-8 px-0 md:px-8 w-full md:w-auto absolute left-0" as="router-link" label="Router" to="/blog?tags=Proyecto">
                Ver todos
            </Button>
        </div>
    </div>
</template>
<script setup lang="ts">
const searchTag = 'Proyecto'

const { data: entries } = await useAsyncData('home-entries', () => queryContent().only(['_path', 'title', 'description', 'image', 'tags'])
                                                                .where({
                                                                    tags: {
                                                                        $contains: searchTag
                                                                    },
                                                                    draft: {
                                                                        $not: true
                                                                    }
                                                                })
                                                                .limit(15)
                                                                .find(), {
                                                                    server: false
                                                                }) as any
                                     
</script>