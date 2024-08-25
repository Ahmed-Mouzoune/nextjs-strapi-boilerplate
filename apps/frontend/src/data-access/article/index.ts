"use server";
import { strapiFetcher } from "@/lib/api/strapi";
import type { Article } from "./type";
import { articleAdapter } from "./type";

export async function getArticles(): Promise<Article[]> {
  const response = await strapiFetcher("api::article.article", {
    sort: "publishedAt:desc",
  });

  return response?.data?.map(articleAdapter) || [];
}
