import {
  createArticle,
  getArticleBySlug,
  getArticles,
} from "@/data-access/article";
import type { Article, ArticleCreate } from "@/data-access/article/type";
import {
  ArticleValidationError,
  NotCreatedError,
  NotFoundError,
} from "./error";

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

export async function createArticleUseCase(article: ArticleCreate) {
  const createdArticle = await createArticle(article);

  if (!createdArticle) {
    throw new NotCreatedError();
  }

  if (createdArticle.error?.status === 400) {
    throw new ArticleValidationError(createdArticle.error.message);
  }

  return createdArticle;
}
