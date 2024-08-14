'use server'

import { strapiFetcher } from '@/utils/strapi-fetcher'
import { StrapiResponseCollection } from '@nextjs-strapi-boilerplate/backend'

export async function getArticle(slug: string) {}

export async function getArticles(): Promise<
	StrapiResponseCollection<'api::article.article'>
> {
	const params = {
		sort: ['publishedAt:desc'],
		populate: 'image',
	}

	return await strapiFetcher(`/articles`, params)
}
