import BlockManager from "@/components/strapi/BlockManager";
import { getPageBySlug } from "@/data-access/page.action";
import { notFound } from "next/navigation";

interface PageRootProps {
  params: {
    slug: string;
  };
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
