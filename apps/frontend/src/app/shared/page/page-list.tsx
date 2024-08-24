import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPages } from "@/data-access/page.action";
import { cn } from "@/lib/utils";

import Link from "next/link";

export default async function PageList() {
  const pages = await getPages({
    sort: "publishedAt:desc",
  });

  return (
    <section className={cn("container mx-auto px-4 py-12 md:px-6")}>
      <h2 className="pb-5 text-xl">List of all pages created with strapi</h2>
      <ol className="grid grid-cols-2 md:grid-cols-4">
        {pages?.data?.map((page) => (
          <Link
            key={`page-${page.id}-${page.attributes.slug}`}
            href={page.attributes.slug}
          >
            <Card>
              <CardHeader>
                <CardTitle>{page.attributes.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                Created at {page.attributes.createdAt?.toLocaleString()}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ol>
    </section>
  );
}
