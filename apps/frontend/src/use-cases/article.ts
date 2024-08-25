import { getArticles } from "@/data-access/article";
import type { Article } from "@/data-access/article/type";
import { NotFoundError } from "./error";

export async function getArticlesUseCase(): Promise<Article[]> {
  const articles = await getArticles();

  if (!articles) {
    throw new NotFoundError();
  }

  return articles || [];
}
