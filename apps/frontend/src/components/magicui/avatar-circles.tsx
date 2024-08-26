"use client";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatars: {
    url: string;
    name: string;
  }[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatars,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatars.map(({ url, name }, index) => (
        <TooltipProvider key={index}>
          <Tooltip>
            <TooltipTrigger>
              <Image
                className="size-10 rounded-full border-2 border-white dark:border-gray-800"
                src={url}
                width={40}
                height={40}
                alt={`Avatar of ${name}`}
              />
            </TooltipTrigger>
            <TooltipContent>
              <Link
                href={`https://github.com/${name}`}
                className="flex"
                target="_blank"
              >
                <GitHubLogoIcon className="mr-1 size-5" />
                {name}
              </Link>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      <span className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </span>
    </div>
  );
};

export default AvatarCircles;
