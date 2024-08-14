import { badgeVariants } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/class-names'
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { Suspense } from 'react'
import ArticleList, { ArticleListLoading } from './shared/article/article-list'
import PageList from './shared/page/page-list'

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center px-3 py-5">
			<article className="mx-auto max-w-screen-lg">
				<div className="text-center">
					<Link
						href={'https://www.linkedin.com/in/ahmed-mouzoune/'}
						target="_blank"
						className={cn(badgeVariants(), 'mr-2')}
					>
						<LinkedInLogoIcon className="mr-1 size-4" />
						Ajoutez Ahmed MOUZOUNE
					</Link>
					<Link
						href="https://twitter.com/abderrahmane_js"
						target="_blank"
						className={badgeVariants()}
					>
						<TwitterLogoIcon className="mr-1 size-4" /> Suivez @abderrahmane_js
					</Link>
				</div>
				<div className="mt-3 text-center">
					<h1 className="text-4xl font-bold">
						Le{' '}
						<span className="from-primary via-primary to-primary bg-gradient-to-r bg-clip-text text-transparent">
							template
						</span>{' '}
						que j&apos;utilise pour tout mes projets
					</h1>
					<p className="mt-2">
						Boilerplate for building applications using Strapi and Next.js
					</p>
				</div>

				<div className="mt-5 flex justify-center gap-5 max-sm:flex-col">
					<Button size={'lg'} asChild>
						<Link
							href={
								'https://github.com/Ahmed-Mouzoune/nextjs-strapi-boilerplate'
							}
						>
							Démarrer
						</Link>
					</Button>
					<Button size={'lg'} variant={'outline'} asChild>
						<Link
							href={
								'https://github.com/Ahmed-Mouzoune/nextjs-strapi-boilerplate'
							}
						>
							<GitHubLogoIcon className="mr-2 size-5" /> Mettre une ⭐ sur
							Github
						</Link>
					</Button>
				</div>
			</article>

			<PageList />

			<Suspense fallback={<ArticleListLoading />}>
				<ArticleList />
			</Suspense>
		</main>
	)
}
