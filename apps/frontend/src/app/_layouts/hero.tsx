import { cn } from "@/lib/utils";
import AvatarCircles from "@components/magicui/avatar-circles";
import { BorderBeamm } from "@components/magicui/border-beam";
import { Badge } from "@components/ui/badge";
import { buttonVariants } from "@components/ui/button";
import { Headline } from "@components/ui/headline";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Announcement } from "./announcement";

export default function Hero() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/45047261",
    "https://avatars.githubusercontent.com/u/83463423",
    "https://avatars.githubusercontent.com/u/83534308",
    "https://avatars.githubusercontent.com/u/102341310",
  ];
  return (
    <section className="container flex flex-col items-start gap-5 text-center md:items-center">
      <Announcement />
      <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
        <Headline
          variant={"h1"}
          className="relative mx-0 max-w-[43.5rem] text-balance bg-gradient-to-br from-primary from-50% to-neutral-200/60 bg-clip-text pt-5 text-left text-5xl font-semibold tracking-tighter text-transparent dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl"
        >
          Nextjs & Strapi boilerplate
        </Headline>
        <Badge className="absolute -top-3.5 right-0 z-10 rotate-3 md:top-12 md:-rotate-12">
          fast implementation
        </Badge>
      </div>
      <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg">
        3+ free and animated templates built with{" "}
        <span className="font-bold text-black dark:text-white">React</span>,{" "}
        <span className="font-bold text-black dark:text-white">Typescript</span>
        ,{" "}
        <span className="font-bold text-black dark:text-white">
          Tailwind CSS
        </span>
        , <span className="font-bold text-black dark:text-white">Magic-UI</span>
        , and{" "}
        <span className="font-bold text-black dark:text-white">
          Framer Motion
        </span>
        .
        <br />
      </p>
      <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href="https://github.com/Ahmed-Mouzoune/nextjs-strapi-boilerplate"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "gap-2 whitespace-pre md:flex",
              "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter ring-offset-inherit transition-all duration-150 ease-in-out hover:ring-2 hover:ring-black hover:ring-offset-2 hover:ring-offset-current dark:hover:ring-neutral-50",
            )}
          >
            <GitHubLogoIcon className="size-5" /> Give a star ⭐{" "}
          </Link>
          <Link
            href="https://github.com/new?template_name=nextjs-strapi-boilerplate&template_owner=Ahmed-Mouzoune"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "outline",
              }),
              "gap-2 whitespace-pre md:flex",
              "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter transition-all duration-150 ease-in-out hover:ring-2 hover:ring-neutral-300 hover:ring-offset-2 hover:ring-offset-inherit dark:hover:ring-black dark:hover:ring-offset-black",
            )}
          >
            Get Started
            <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="flex max-w-xl flex-row items-center justify-between text-balance p-5 text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-base">
        <span className="font-300 text-md mr-2 text-gray-600 dark:text-gray-400">
          Trusted by
        </span>
        <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
      </div>

      <div className="relative hidden rounded-xl lg:block">
        <Image
          src="/dashboard-dark.png"
          alt="Hero section desktop"
          width={1200}
          height={350}
          className="hidden max-w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:block"
        />
        <Image
          src="/dashboard-light.png"
          alt="Hero section mobile"
          width={1200}
          height={350}
          className="block max-w-[1200px] rounded-[inherit] border object-contain shadow-lg dark:hidden"
        />

        <BorderBeamm size={250} duration={12} delay={9} />
      </div>
    </section>
  );
}
