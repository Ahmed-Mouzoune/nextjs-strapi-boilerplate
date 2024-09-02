import { StrapiImage } from "@/components/strapi-image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Headline } from "@/components/ui/headline";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  image: {
    src: string;
    alt?: string;
  };
  author: string;
  publishedAt?: string;
}

export default function ArticleCard({
  slug,
  title,
  publishedAt,
  image,
  author,
}: ArticleCardProps) {
  return (
    <Card className="group w-full cursor-pointer rounded-2xl border border-gray-300 transition-all duration-300 hover:border-primary">
      <Link href={slug}>
        <CardHeader className="h-[200px]">
          <StrapiImage
            src={image.src}
            alt={image.alt ?? `Image for ${title}`}
            className="h-full w-full rounded-lg object-cover object-center"
            width={300}
            height={200}
          />
        </CardHeader>
        <CardContent>
          <Headline variant={"h4"} className="font-medium leading-8">
            {title}
          </Headline>
          <div className="flex items-center justify-between font-medium">
            <Headline variant={"h6"} className="text-sm text-gray-500">
              By {author}
            </Headline>
            {publishedAt && (
              <Headline variant={"h6"} className="text-primary-600 text-sm">
                @{publishedAt}
              </Headline>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export function ArticleCardLoading() {
  return (
    <Card className="hover:border-primary-600 group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 max-lg:max-w-xl lg:w-1/3">
      <CardHeader className="mb-6 flex items-center">
        <Skeleton className="h-full w-full" />
      </CardHeader>
      <CardContent className="block">
        <Headline variant={"h4"}>
          <Skeleton className="h-6 w-full" />
        </Headline>
        <div className="flex items-center justify-between font-medium">
          <Headline variant={"h6"}>
            <Skeleton className="h-6 w-full" />
          </Headline>
          <Headline variant={"h6"}>
            <Skeleton className="h-6 w-full" />
          </Headline>
        </div>
      </CardContent>
    </Card>
  );
}
