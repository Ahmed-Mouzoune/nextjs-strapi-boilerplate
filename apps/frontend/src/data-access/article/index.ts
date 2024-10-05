"use server";
import { strapiFetcher, strapiPost } from "@/lib/api/strapi";
import type { StrapiResponseList } from "@nextjs-strapi-boilerplate/strapi-backend";
import slugify from "slugify";
import type { Article, ArticleCreate } from "./type";
import { articleAdapter } from "./type";

export async function getArticles(): Promise<Article[]> {
  const response = await strapiFetcher("api::article.article", {
    sort: "publishedAt:desc",
    populate: ["cover"],
  });

  return response?.data?.map(articleAdapter) || [];
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const response: StrapiResponseList<"api::article.article"> =
    await strapiFetcher("api::article.article", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["cover"],
    });

  return articleAdapter(response.data[0]);
}

export async function createArticle(article: ArticleCreate): Promise<any> {
  const response = await strapiPost("api::article.article", {
    data: {
      slug: article.slug ?? slugify(article.title),
      title: article.title,
      description: article.description,
      image: 1,
      seo: {
        metaTitle: article.title,
        metaDescription: article.description,
      },
      author: article.author,
    },
  });

  return response;
}
