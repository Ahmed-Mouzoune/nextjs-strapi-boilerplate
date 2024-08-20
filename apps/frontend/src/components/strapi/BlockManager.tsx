import type { Common, GetValues } from "@nextjs-strapi-boilerplate/backend";
import StrapiButton from "./strapi-button";
import StrapiWysiwig from "./strapi-wisiwig";

type BlockUid = Extract<Common.UID.Component, `block.${string}`>;

const BlockMapper: {
  [K in BlockUid]: (props: GetValues<K>) => JSX.Element;
} = {
  "block.button": StrapiButton,
  "block.wysiwig": StrapiWysiwig,
};

interface Block {
  id: number;
  __component: BlockUid;
}

type BlockAndContent = Block & GetValues<Block["__component"]>;

interface TBlockManager {
  blocks: BlockAndContent[];
}

export default function BlockManager({ blocks }: TBlockManager) {
  return blocks?.map(getBlockComponent);
}

const getBlockComponent = ({ id, __component, ...rest }: BlockAndContent) => {
  const Block = BlockMapper[__component] || null;

  // TODO: Infer type from __component (GetValues<__component>)
  // @ts-expect-error
  return Block ? <Block key={`block-${id}`} {...rest} /> : null;
};
