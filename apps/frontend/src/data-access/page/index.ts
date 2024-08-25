"use server";

import { strapiFetcher } from "@/lib/api/strapi";
import type { StrapiResponseCollection } from "@nextjs-strapi-boilerplate/backend";
import type { Page } from "./type";
import { pageAdapter } from "./type";

export async function getPageBySlug(slug: string): Promise<Page> {
  const response: StrapiResponseCollection<"api::page.page"> =
    await strapiFetcher("api::page.page", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["dynamicContent", "seo"],
    });

  return pageAdapter(response?.data?.[0]);
}

export async function getPages(): Promise<Page[]> {
  const response: StrapiResponseCollection<"api::page.page"> =
    await strapiFetcher("api::page.page", {
      sort: "publishedAt:desc",
    });

  return response.data?.map(pageAdapter) || [];
}
