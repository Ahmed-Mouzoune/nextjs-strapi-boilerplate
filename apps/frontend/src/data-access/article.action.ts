"use server";

import { strapiFetcher } from "@/lib/api/strapi";
import type { StrapiResponseCollection } from "@nextjs-strapi-boilerplate/backend";

export async function getArticles(): Promise<
  StrapiResponseCollection<"api::article.article">
> {
  const params = {
    sort: ["publishedAt:desc"],
    populate: "image",
  };

  return await strapiFetcher("api::article.article", params);
}
