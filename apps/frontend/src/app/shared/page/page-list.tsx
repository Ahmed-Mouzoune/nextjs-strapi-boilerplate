import { HoverEffect } from "@/components/aceternity/card-hover-effect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headline } from "@/components/ui/headline";
import { cn } from "@/lib/utils";
import { getPagesUseCase } from "@/use-cases/page";

export default async function PageList() {
  const pages = await getPagesUseCase();

  return (
    <section className={cn("container mx-auto space-y-3 px-4 py-12 md:px-6")}>
      <Headline variant={"h2"}>List of all pages created with strapi</Headline>

      <ol className="grid grid-cols-2 md:grid-cols-4">
        {pages && (
          <HoverEffect
            items={pages.map((page) => ({
              link: page.slug,
              Element: () => {
                return (
                  <Card>
                    <CardHeader>
                      <CardTitle>{page.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {page.seo.metaDescription}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      Created at {page.createdAt?.toLocaleString()}
                    </CardFooter>
                  </Card>
                );
              },
            }))}
          />
        )}
      </ol>
    </section>
  );
}
