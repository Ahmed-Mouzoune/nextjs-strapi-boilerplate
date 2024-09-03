import type {
  GetValues,
  StrapiResponseData,
} from "@nextjs-strapi-boilerplate/backend";
import { z } from "zod";

export type Article = GetValues<"api::article.article"> & {
  id: number;
};

export type ArticleCreate = Pick<Article, "title" | "description" | "author"> &
  Partial<Article>;

export const articleCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  author: z.string().min(1, { message: "Author is required" }),
});

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
