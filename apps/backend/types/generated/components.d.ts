import type { Schema, Attribute } from '@strapi/strapi'

export interface BlockButton extends Schema.Component {
  collectionName: 'components_block_buttons'
  info: {
    displayName: 'Button'
    icon: 'oneToMany'
  }
  attributes: {
    text: Attribute.String & Attribute.Required
    link: Attribute.String & Attribute.Required
    size: Attribute.Enumeration<['default', 'sm', 'lg', 'icon']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>
    variant: Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'default'>
  }
}

export interface BlockWysiwig extends Schema.Component {
  collectionName: 'components_block_wysiwigs'
  info: {
    displayName: 'Wysiwig'
    icon: 'file'
  }
  attributes: {
    content: Attribute.RichText & Attribute.Required
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'block.button': BlockButton
      'block.wysiwig': BlockWysiwig
    }
  }
}
