import {
  createArticle,
  getArticleBySlug,
  getArticles,
} from "@/data-access/article";
import type { Article } from "@/data-access/article/type";
import { NotCreatedError, NotFoundError } from "./error";

export async function getArticlesUseCase(): Promise<Article[]> {
  const articles = await getArticles();

  if (!articles) {
    throw new NotFoundError();
  }

  return articles || [];
}

export async function getArticleBySlugUseCase(slug: string): Promise<Article> {
  const article = await getArticleBySlug(slug);

  if (!article) {
    throw new NotFoundError();
  }

  return article;
}

export async function createArticleUseCase(article: Article) {
  const createdArticle = await createArticle(article);

  if (!createdArticle) {
    throw new NotCreatedError();
  }

  return createdArticle;
}
