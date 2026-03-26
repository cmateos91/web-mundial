import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const noticias = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/noticias'}),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        resumen: z.string(),
    })
})

export const collections = { noticias }