"use client";

import { strapiGetMedia } from "@/lib/api/strapi";
import { cn } from "@/lib/utils";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { useState } from "react";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
}

function StrapiImage({
  src,
  alt,
  height,
  width,
  className,
  priority = false,
  ...props
}: StrapiImageProps & ImageProps) {
  const imageUrl = strapiGetMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}.png`;
  const [image, setImage] = useState(imageUrl);

  return (
    <Image
      src={image ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      priority={priority}
      className={cn(className)}
      onError={() => {
        setImage(imageFallback);
      }}
      {...props}
    />
  );
}

export { StrapiImage };
