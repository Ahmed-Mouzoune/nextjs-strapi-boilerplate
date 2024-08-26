import { getPageBySlugUseCase } from "@/use-cases/page";
import BlockManager from "@components/strapi/BlockManager";
import { Headline } from "@components/ui/headline";
import type { Metadata } from "next";
import { strapiGetMetaData, strapiGetUrlFromSlug } from "../../lib/api/strapi";

interface PageRootProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageRootProps): Promise<Metadata> {
  const page = await getPageBySlugUseCase(params.slug);

  return strapiGetMetaData(page.seo, strapiGetUrlFromSlug(page.slug));
}

export default async function PageRoot({ params }: PageRootProps) {
  const page = await getPageBySlugUseCase(params.slug);

  return (
    <section className="text-center">
      <Headline>{page.title}</Headline>

      <p>{page.seo.metaDescription}</p>

      {/* @ts-expect-error */}
      {page.dynamicContent && <BlockManager blocks={page.dynamicContent} />}
    </section>
  );
}
