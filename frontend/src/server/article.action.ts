"use server"

import { StrapiResponseCollection } from "@/types/strapi"
import { strapiFetcher } from "@/utils/strapi-fetcher"

export async function getArticle(slug: string) {}

export async function getArticles(): Promise<
  StrapiResponseCollection<"api::article.article">
> {
  const params = {
    sort: ["publishedAt:desc"],
    populate: "image",
  }

  return await strapiFetcher(`/articles`, params)
}
