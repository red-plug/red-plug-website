<template>
  <div class="md:h-0.5"></div>
  <section id="blog-details" v-if="post" :key="post.id" class="mb-16">
    <div class="container mx-auto bg-surface-50 dark:bg-surface-900 md:rounded-lg">
      <div class="max-w-4xl mx-auto pb-8">
        <div class="md:mt-8 p-8 md:px-4">
          <h2 class="text-center text-4xl md:text-5xl font-semibold py-9 font-serif" v-text="post.title">
          </h2>
          <span class="mb-4 block text-sm">
            Publicado el {{ publishDate }} <span v-if="post.authorName"> por <a v-text="post.authorName"
                :href="post.authorUrl" target="_blank" rel="noopener noreferrer" class="text-primary"></a> </span>
          </span>
          <img :src="post.image" :alt="post.title" class="border rounded-lg shadow-lg shadow-primary-500/50" />
          <div id="blog-content" class="my-8">
            <ContentRenderer :value="post" />
          </div>
          <a class="flex gap-x-4 items-center mt-8" :href="post.authorUrl" target="_blank" rel="noopener noreferrer">
            <Avatar :image="post.authorImage" size="xlarge" shape="circle">
            </Avatar>
            <div>
              <h4 v-text="post.authorName" class="font-semibold text-xl"></h4>
              <span>
                Integrante de <span class="text-primary">Red Plug</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto bg-surface-0 dark:bg-surface-900 md:rounded-lg mt-8 pb-8 pt-8">
      <div class="mb-8">
        <h2 class="text-3xl md:text-4xl font-semibold text-center">
          Últimas publicaciones
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 gap-x-4 gap-y-8 md:gap-y-4 mt-8 md:mt-0 px-8">
        <div v-for="entry in entries" class="relative group" :key="entry.path">
          <img :src="entry.image" :alt="entry.title"
            class="rounded-lg md:group-hover:scale-105 transition-transform duration-500 border" />
          <span class="block mt-3 w-0 group-hover:w-3/4 transition-all duration-500 h-0.5 bg-primary-500"></span>
          <NuxtLink :to="entry.path"
            class="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:z-[1] after:content-['']">
            <h3 v-text="entry.title"
              class="mt-1 text-lg md:text-xl font-bold group-hover:text-primary transition-colors duration-500"></h3>
          </NuxtLink>
          <p v-text="entry.description" class="text-sm md:text-base"></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

const route = useRoute()
const router = useRouter()

const { slug: path } = route.params
const { data: post } = await useAsyncData(`blog/${path}`, () => queryCollection('blog').path(`/blog/${path}`).first())

if (post.value == null) {
  router.push({ path: '/blog' })
}


useSeoMeta({
  title: 'Red Plug | ' + post.value?.title,
  ogTitle: 'Red Plug | ' + post.value?.title,
  description: post.value?.description,
  ogDescription: post.value?.description,
  ogImage: post.value?.image,
})

const date = new Date(post.value?.publishedAt || '')

const day = date.getUTCDate().toString().padStart(2, '0')
const month = (date.getUTCMonth() + 1).toString().padStart(2, '0')
const year = date.getUTCFullYear()
const publishDate = `${day}/${month}/${year}`

const { data: entries, status } = await useAsyncData('blog-entries-latest', () => queryCollection('blog').select('id', 'path', 'title', 'description', 'image', 'weight')
  .order('weight', 'ASC')
  .limit(4)
  .all())

</script>
