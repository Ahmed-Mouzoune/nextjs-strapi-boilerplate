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
import { cn, formatDate } from "@/lib/utils";
import { getPagesUseCase } from "@/use-cases/page";

export default async function PageList() {
  const pages = await getPagesUseCase();

  return (
    <section className={cn("container mx-auto space-y-3 px-4 py-12 md:px-6")}>
      <Headline variant={"h2"}>List of all pages created with strapi</Headline>

      {pages && (
        <HoverEffect
          items={pages.map((page) => ({
            link: page.slug,
            children: (
              <Card className="h-full w-full">
                <CardHeader>
                  <CardTitle>{page.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{page.seo.metaDescription}</CardDescription>
                </CardContent>
                {page.createdAt && (
                  <CardFooter className="self-end">
                    Created @
                    {formatDate(new Date(page.createdAt), "dd/MM HH:mm")}
                  </CardFooter>
                )}
              </Card>
            ),
          }))}
        />
      )}
    </section>
  );
}
