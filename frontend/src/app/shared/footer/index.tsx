import { Button } from '@/components/ui/button'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-accent py-5 text-sm">
      <section className="container flex flex-col items-center justify-between gap-5 md:flex-row">
        <div>
          <span>© {new Date().getFullYear()} Built by </span>
          <Button variant={'link'} className="px-0" asChild>
            <Link href={'https://abderrahmanemouzoune.com'}>
              Abderrahmane Mouzoune.
            </Link>
          </Button>
          <span className="ml-1">Powered by </span>
          <Button variant={'link'} className="px-0" asChild>
            <Link href={'https://www.youzoune.com'}>youzoune.com</Link>
          </Button>
        </div>

        <div className="flex gap-5 md:gap-2">
          <Link
            href={'https://github.com/AbderrahmaneMouzoune'}
            className="hover:text-primary transition-colors"
            target="_blank"
          >
            <GitHubLogoIcon className="size-5" />
          </Link>

          <hr className="bg-accent-foreground size-5 w-[1px] opacity-10" />

          <Link
            href={'https://www.linkedin.com/in/abderrahmane-mouzoune/'}
            className="hover:text-primary transition-colors"
            target="_blank"
          >
            <LinkedInLogoIcon className="size-5" />
          </Link>

          <hr className="bg-accent-foreground size-5 w-[1px] opacity-10" />

          <Link
            href={'https://twitter.com/abderrahmane_js'}
            className="hover:text-primary transition-colors"
            target="_blank"
          >
            <TwitterLogoIcon className="size-5" />
          </Link>
        </div>
      </section>
    </footer>
  )
}
