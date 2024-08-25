import { cn } from "@/lib/utils";
import { getArticlesUseCase } from "@/use-cases/article";
import ArticleCard, { ArticleCardLoading } from "./article-card";

export default async function ArticleList() {
  const articles = await getArticlesUseCase();

  return (
    <section
      className={cn(
        "container mx-auto px-4 py-12 md:px-6",
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {articles?.map((article) => (
        <ArticleCard
          key={article.slug}
          slug={article.slug}
          title={article.title}
          description={article.description}
          image={{
            src: article.image?.data?.attributes?.url ?? "",
            alt: article.image?.data?.attributes?.alternativeText,
          }}
        />
      ))}
    </section>
  );
}

export function ArticleListLoading() {
  return (
    <section
      className={cn(
        "container mx-auto px-4 py-12 md:px-6",
        "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <ArticleCardLoading key={`fake-article-loading-${i}`} />
      ))}
    </section>
  );
}
