"use server";

import { strapiFetcher } from "@/utils/strapi-fetcher";
import type {
  StrapiResponseCollection,
  StrapiResponseData,
} from "@nextjs-strapi-boilerplate/backend";

export async function getPageBySlug(
  slug: string,
): Promise<StrapiResponseData<"api::page.page"> | undefined> {
  const params = {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: "dynamicContent",
  };

  try {
    const response = (await strapiFetcher(
      "/pages",
      params,
    )) as StrapiResponseCollection<"api::page.page">;

    return response?.data?.[0];
  } catch (error) {
    console.error(`> error while trying to retrieve page:${slug}`, error);
    return undefined;
  }
}

export async function getPages(): Promise<
  StrapiResponseCollection<"api::page.page">
> {
  const params = {
    sort: ["publishedAt:desc"],
  };

  return await strapiFetcher(`/pages`, params);
}
