"use server";

import { strapiFetcher } from "@/lib/api/strapi";
import type {
  StrapiResponseCollection,
  StrapiResponseData,
  StrapiUrlParams,
} from "@nextjs-strapi-boilerplate/backend";

export async function getPageBySlug(
  slug: string,
): Promise<StrapiResponseData<"api::page.page"> | undefined> {
  try {
    const response = (await strapiFetcher("api::page.page", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["dynamicContent", "seo"],
    })) as StrapiResponseCollection<"api::page.page">;

    return response?.data?.[0];
  } catch (error) {
    console.error(`> error while trying to retrieve page:${slug}`, error);
    return undefined;
  }
}

export async function getPages(
  params: StrapiUrlParams<"api::page.page"> = {},
): Promise<StrapiResponseCollection<"api::page.page">> {
  return await strapiFetcher("api::page.page", params);
}
