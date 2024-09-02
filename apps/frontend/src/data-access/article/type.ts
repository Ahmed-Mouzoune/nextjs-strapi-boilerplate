import type {
  GetValues,
  StrapiResponseData,
} from "@nextjs-strapi-boilerplate/backend";

export type Article = GetValues<"api::article.article"> & {
  id: number;
};

export function articleAdapter(
  article: StrapiResponseData<"api::article.article">,
): Article {
  return {
    id: article.id,
    slug: article.attributes.slug,
    title: article.attributes.title,
    description: article.attributes.description,
    image: article.attributes.image,
    seo: article.attributes.seo,
    author: article.attributes.author,
    createdAt: article.attributes.createdAt,
    publishedAt: article.attributes.publishedAt,
    updatedAt: article.attributes.updatedAt,
  };
}
