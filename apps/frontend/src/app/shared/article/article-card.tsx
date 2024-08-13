import { StrapiImage } from '@/components/strapi-image'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

type ArticleCardProps = {
  slug: string
  title: string
  description: string
  image: {
    src: string
    alt?: string
  }
}

export default function ArticleCard({
  slug,
  title,
  description,
  image,
}: ArticleCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg">
      <StrapiImage
        src={image.src}
        alt={image.alt || `Image for ${image.alt}`}
        width={600}
        height={400}
        className="h-48 w-full object-cover"
      />
      <CardContent className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href={slug}
          className="text-primary inline-flex items-center font-medium hover:underline"
          prefetch={false}
        >
          Read more
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export function ArticleCardLoading() {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg">
      <Skeleton className="h-48 w-full" />
      <CardContent className="p-6">
        <Skeleton className="mb-2 h-[32px] w-full" />
        <Skeleton className="mb-4 h-[48px] w-full" />
        <p className="text-primary inline-flex items-center font-medium">
          Read more
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </p>
      </CardContent>
    </Card>
  )
}
