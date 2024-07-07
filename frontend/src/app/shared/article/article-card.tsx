import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

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
      <Image
        src={image.src}
        alt={image.alt || `Image for ${image.alt}`}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Link
          href={slug}
          className="inline-flex items-center text-primary font-medium hover:underline"
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
      <Skeleton className="w-full h-48" />
      <CardContent className="p-6">
        <Skeleton className="w-full mb-2 h-[32px]" />
        <Skeleton className="w-full h-[48px] mb-4" />
        <p className="inline-flex items-center text-primary font-medium">
          Read more
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </p>
      </CardContent>
    </Card>
  )
}
