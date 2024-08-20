import BlockManager from "@/components/strapi/BlockManager";
import { getPageBySlug } from "@/data-access/page.action";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { strapiGetMetaData, strapiGetUrlFromSlug } from "../../lib/api/strapi";

interface PageRootProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageRootProps): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);

  return strapiGetMetaData(
    page?.attributes.seo ?? null,
    strapiGetUrlFromSlug(params.slug),
  );
}

export default async function PageRoot({ params }: PageRootProps) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    return notFound();
  }

  const { dynamicContent } = page.attributes;

  return (
    <section className="text-center">
      <h1>{page.attributes.title}</h1>

      {dynamicContent && <BlockManager blocks={dynamicContent} />}
    </section>
  );
}
