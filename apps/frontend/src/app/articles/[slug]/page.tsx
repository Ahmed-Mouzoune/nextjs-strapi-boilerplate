import { Headline } from "@/components/ui/headline";
import { strapiGetMetaData, strapiGetUrlFromSlug } from "@/lib/api/strapi";
import { getArticleBySlugUseCase } from "@/use-cases/article";
import type { Metadata } from "next";

interface PageRootProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageRootProps): Promise<Metadata> {
  const article = await getArticleBySlugUseCase(params.slug);
  return strapiGetMetaData(article.seo, strapiGetUrlFromSlug(article.slug));
}

export default async function PageRoot({ params }: PageRootProps) {
  const article = await getArticleBySlugUseCase(params.slug);
  return (
    <div>
      <Headline>{article.title}</Headline>

      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: article.description }} />
      </div>
    </div>
  );
}
