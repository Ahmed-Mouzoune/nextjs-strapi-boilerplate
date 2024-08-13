import { getPageBySlug } from '@/server/page.action'
import { notFound } from 'next/navigation'
import React from 'react'

type PageRootProps = {
  params: {
    slug: string
  }
}
export default async function PageRoot({ params }: PageRootProps) {
  const page = await getPageBySlug(params.slug)

  if (!page) {
    return notFound()
  }

  return (
    <section className="text-center">
      <h1>{page.attributes.title}</h1>
    </section>
  )
}
