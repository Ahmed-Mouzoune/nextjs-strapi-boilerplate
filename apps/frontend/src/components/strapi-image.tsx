import { cn } from "@/utils/class-names";
import { strapiGetMedia } from "@/utils/strapi-helper";
import Image, { ImageProps } from "next/image";

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
  if (!src) return null;
  const imageUrl = strapiGetMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      priority={priority}
      className={cn(className)}
      {...props}
    />
  );
}

export { StrapiImage };
