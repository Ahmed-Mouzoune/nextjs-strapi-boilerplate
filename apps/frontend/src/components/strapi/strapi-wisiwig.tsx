import type { GetValues } from "@nextjs-strapi-boilerplate/backend";

export default function StrapiWysiwig(props: GetValues<"block.wysiwig">) {
  return <div>{props.content}</div>;
}
