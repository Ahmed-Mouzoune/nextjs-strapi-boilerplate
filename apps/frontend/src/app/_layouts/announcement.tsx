"use client";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@components/magicui/animated-gradient-text";
import Image from "next/image";

export function Announcement() {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        <Image src={"/favicon.ico"} alt={"Logo"} width={20} height={20} />{" "}
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `via-neutral inline animate-gradient bg-gradient-to-r from-primary to-primary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Introducing Nextrapi
        </span>
      </AnimatedGradientText>
    </div>
  );
}
