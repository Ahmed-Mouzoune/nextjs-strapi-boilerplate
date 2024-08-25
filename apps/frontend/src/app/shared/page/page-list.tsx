import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getPagesUseCase } from "@/use-cases/page";

import Link from "next/link";

export default async function PageList() {
  const pages = await getPagesUseCase();

  return (
    <section className={cn("container mx-auto px-4 py-12 md:px-6")}>
      <h2 className="pb-5 text-xl">List of all pages created with strapi</h2>
      <ol className="grid grid-cols-2 md:grid-cols-4">
        {pages?.map((page) => (
          <Link key={`page-${page.id}-${page.slug}`} href={page.slug}>
            <Card>
              <CardHeader>
                <CardTitle>{page.title}</CardTitle>
              </CardHeader>
              <CardFooter>
                Created at {page.createdAt?.toLocaleString()}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ol>
    </section>
  );
}
