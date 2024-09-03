import { APP_CONFIG, FALLBACK_SEO } from "@/app.config";
import { env } from "@/env.mjs";
import { StrapiError } from "@/use-cases/error";
import type {
  GetValues,
  StrapiUrlParams,
  StrapiUrlPostParams,
} from "@nextjs-strapi-boilerplate/backend";
import type { Metadata } from "next";
import qs from "qs";
import type { ApiContentTypeUid } from "./type";
import { API_ENDPOINTS } from "./type";

// Get base url of strapi API
export function strapiGetUrl(path = ""): string {
  return `${env.STRAPI_URL ?? "http://localhost:1337"}${path}`;
}

// Get path of media from strapi (can be external media or media hosted by strapi)
export function strapiGetMedia(url: string | null | undefined): string | null {
  if (!url) {
    return null;
  }

  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") ?? url.startsWith("//")) {
    return url;
  }

  // Otherwise prepend the URL path with the Strapi URL
  return `${env.NEXT_PUBLIC_STRAPI_MEDIA_URL ?? "http://localhost:1337"}${url}`;
}

export function strapiGetMetaData(
  metadata: GetValues<"shared.seo"> | null,
  pageUrl: string,
): Metadata {
  if (!metadata) return FALLBACK_SEO;

  const openGraph = {
    type: "website",
    locale: "fr_FR",
    title: metadata.metaTitle,
    description: metadata?.metaDescription,
    url: metadata?.canonicalURL ?? pageUrl,
    image: {
      url: strapiGetMedia(metadata.metaImage?.data?.attributes?.url),
      alt: metadata?.metaImage
        ? (metadata.metaImage?.data?.attributes?.alternativeText ??
          `Image seo ${APP_CONFIG.name}`)
        : `Image seo ${APP_CONFIG.name}`,
      width: metadata.metaImage
        ? metadata.metaImage?.data?.attributes?.width
        : 1200,
      height: metadata.metaImage
        ? metadata.metaImage?.data?.attributes?.height
        : 630,
    },
  };

  const twitterCard = {
    card: "summary_large_image",
    site: APP_CONFIG.twitter,
    title: metadata?.metaTitle,
    description: metadata?.metaDescription,
    image: strapiGetMedia(metadata.metaImage?.data?.attributes?.url),
  };

  return {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    keywords: metadata.keywords,
    robots: metadata.metaRobots,
    creator: APP_CONFIG.creator,
    authors: APP_CONFIG.authors,
    openGraph,
    twitter: twitterCard,
  };
}

export function strapiGetUrlFromSlug(
  slug: string,
  entity?: ApiContentTypeUid,
): string {
  switch (entity) {
    case "api::article.article":
      return `${APP_CONFIG.website}/articles/${slug}`;
    default:
      return `${APP_CONFIG.website}/${slug}`;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getStrapiApiByUid(uid: ApiContentTypeUid): string {
  const path = API_ENDPOINTS[uid];

  if (path) {
    return path;
  }

  throw new StrapiError(
    `Endpoint for UID "${uid}" not found. Extend API_ENDPOINTS in src/utils/strapi-fetcher`,
  );
}

type HttpMethod = "GET" | "POST";

async function strapiRequest<
  TContentTypeUID extends ApiContentTypeUid,
  TParams extends
    | StrapiUrlParams<TContentTypeUID>
    | StrapiUrlPostParams<TContentTypeUID>,
>(
  apiUid: TContentTypeUID,
  urlParamsObject?: TParams,
  options: RequestInit = {},
  method: HttpMethod = "GET",
) {
  const path = getStrapiApiByUid(apiUid);
  const cacheDuration: number = env.NODE_ENV === "development" ? 0 : 60;

  const mergedOptions: RequestInit = {
    next: { revalidate: cacheDuration },
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.STRAPI_API_PUBLIC_TOKEN}`,
    },
    ...options,
  };

  let requestUrl = `${strapiGetUrl(`/api${path}`)}`;

  if (method === "GET" && urlParamsObject) {
    const queryString = qs.stringify(urlParamsObject);
    requestUrl += queryString ? `?${queryString}` : "";
  } else if (method === "POST" && urlParamsObject) {
    mergedOptions.body = JSON.stringify(urlParamsObject);
  }

  if (env.NODE_ENV === "development") {
    await delay(1000);
  }

  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      if (response.status === 401) throw new StrapiError("UnauthorizedError");
      if (response.status === 403) throw new StrapiError("Bad Credentials");
      if (response.status === 400) throw new StrapiError("MalFormattedRequest");
      if (response.status === 404) throw new StrapiError("NotFoundError");
      throw new StrapiError(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof StrapiError) {
      throw error;
    }

    throw new StrapiError(
      `Please check if your Strapi server is running and you set all the required tokens. ${error}`,
    );
  }
}

export async function strapiFetcher<
  TContentTypeUID extends ApiContentTypeUid,
  TParams extends StrapiUrlParams<TContentTypeUID>,
>(
  apiUid: TContentTypeUID,
  urlParamsObject?: TParams,
  options: RequestInit = {},
) {
  return strapiRequest(apiUid, urlParamsObject, options, "GET");
}

export async function strapiPost<
  TContentTypeUID extends ApiContentTypeUid,
  TParams extends StrapiUrlPostParams<TContentTypeUID>,
>(
  apiUid: TContentTypeUID,
  urlParamsObject?: TParams,
  options: RequestInit = {},
) {
  return strapiRequest(apiUid, urlParamsObject, options, "POST");
}
