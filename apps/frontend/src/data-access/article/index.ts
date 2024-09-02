"use server";
import { strapiFetcher, strapiPost } from "@/lib/api/strapi";
import type { StrapiResponseCollection } from "@nextjs-strapi-boilerplate/backend";
import type { Article } from "./type";
import { articleAdapter } from "./type";

export async function getArticles(): Promise<Article[]> {
  const response = await strapiFetcher("api::article.article", {
    sort: "publishedAt:desc",
    populate: ["image"],
  });

  return response?.data?.map(articleAdapter) || [];
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const response: StrapiResponseCollection<"api::article.article"> =
    await strapiFetcher("api::article.article", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["image", "seo"],
    });

  return articleAdapter(response?.data?.[0]);
}

export async function createArticle(article: Article): Promise<boolean> {
  const response = await strapiPost("api::article.article", {
    data: {
      slug: article.slug,
      title: article.title,
      description: article.description,
      image: article.image,
      seo: article.seo,
      author: article.author,
    },
  });

  return response.status === 200;
}
