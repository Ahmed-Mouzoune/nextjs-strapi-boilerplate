import { GetValues } from '@nextjs-strapi-boilerplate/backend'
import React from 'react'

export default function StrapiWysiwig(props: GetValues<'block.wysiwig'>) {
  return <div>{props.content}</div>
}
