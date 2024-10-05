import type { GetValues } from "@nextjs-strapi-boilerplate/strapi-backend";
import { z } from "zod";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  author: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export type ArticleCreate = Pick<Article, "title" | "description" | "author"> &
  Partial<Article>;

export const articleCreateSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z
    .string()
    .min(50, { message: "Description of minimum 50 characters is required" }),
  author: z.string().min(1, { message: "Author is required" }),
});

export function articleAdapter(
  article: GetValues<"api::article.article">,
): Article {
  return {
    id: article.documentID,
    slug: article.slug as unknown as string,
    title: article.title as unknown as string,
    description: article.description as unknown as string,
    cover: article.cover as unknown as string,
    author: article.author as unknown as string,
    createdAt: article.createdAt as unknown as string,
    publishedAt: article.publishedAt as unknown as string,
    updatedAt: article.updatedAt as unknown as string,
  };
}
