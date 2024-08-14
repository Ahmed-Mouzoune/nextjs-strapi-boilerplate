import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GetValues } from '@nextjs-strapi-boilerplate/backend'

type StrapiButtonProps = GetValues<'block.button'>

export default function StrapiButton(props: StrapiButtonProps) {
	return (
		<Button asChild size={props.size} variant={props.variant}>
			<Link href={props.link}>{props.text}</Link>
		</Button>
	)
}
