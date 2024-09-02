import { Headline } from "@/components/ui/headline";
import { strapiGetUrlFromSlug } from "@/lib/api/strapi";
import { formatDate } from "@/lib/utils";
import { getArticlesUseCase } from "@/use-cases/article";
import ArticleCard, { ArticleCardLoading } from "./article-card";

export default async function ArticleList() {
  const articles = await getArticlesUseCase();

  return (
    <section className="container space-y-3">
      <Headline variant={"h2"} className="text-center">
        Our popular blogs
      </Headline>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            slug={strapiGetUrlFromSlug(article.slug, "api::article.article")}
            title={article.title}
            image={{
              src: article.image?.data.attributes.url ?? "",
              alt: article.image?.data.attributes.alternativeText ?? "",
            }}
            author={article.author}
            publishedAt={
              article.publishedAt &&
              formatDate(new Date(article.publishedAt), "dd/MM HH:mm")
            }
          />
        ))}
      </div>
    </section>
  );
}

export function ArticleListLoading() {
  return (
    <section className="container space-y-3">
      <Headline variant={"h2"} className="text-center">
        Our popular blogs
      </Headline>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <ArticleCardLoading key={`fake-article-loading-${i}`} />
        ))}
      </div>
    </section>
  );
}
