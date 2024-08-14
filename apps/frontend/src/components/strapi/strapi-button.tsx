import { Button } from "@/components/ui/button";
import type { GetValues } from "@nextjs-strapi-boilerplate/backend";
import Link from "next/link";

type StrapiButtonProps = GetValues<"block.button">;

export default function StrapiButton(props: StrapiButtonProps) {
  return (
    <Button asChild size={props.size} variant={props.variant}>
      <Link href={props.link}>{props.text}</Link>
    </Button>
  );
}
