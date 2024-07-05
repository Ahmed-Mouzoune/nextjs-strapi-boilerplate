import { cn } from "@/utils/class-names"
import React from "react"
import ArticleCard from "./article-card"
import { getArticles } from "@/server/article.action"
import { strapiGetMedia } from "@/utils/strapi-helper"

export default async function ArticleList() {
  const articles = await getArticles()

  return (
    <section
      className={cn(
        "container mx-auto py-12 px-4 md:px-6",
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      )}
    >
      {articles?.data?.map((article) => (
        <ArticleCard
          key={article.attributes.slug}
          slug={article.attributes.slug}
          title={article.attributes.title}
          description={article.attributes.description}
          image={{
            src: strapiGetMedia(article.attributes.image?.data.attributes.url),
            alt: article.attributes.image?.data?.attributes?.alternativeText,
          }}
        />
      ))}
    </section>
  )
}
