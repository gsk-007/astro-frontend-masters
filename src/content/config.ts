import { defineCollection, z } from 'astro:content'

export const collections = {
	blog: defineCollection({
		Schema: z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().max(200),
		}),
	}),
}
