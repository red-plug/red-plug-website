import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        url: z.string(),
        weight: z.number(),
      })
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        tags: z.array(z.string()),
        weight: z.number(),
        publishedAt: z.date(),
        authorName: z.string(),
        authorUrl: z.string(),
        authorImage: z.string(),
      })
    })
  }
})