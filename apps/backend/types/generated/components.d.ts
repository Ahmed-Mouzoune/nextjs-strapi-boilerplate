import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface BlockWysiwig extends Schema.Component {
  collectionName: 'components_block_wysiwigs';
  info: {
    displayName: 'Wysiwig';
    icon: 'file';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface BlockButton extends Schema.Component {
  collectionName: 'components_block_buttons';
  info: {
    displayName: 'Button';
    icon: 'oneToMany';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    size: Attribute.Enumeration<['default', 'sm', 'lg', 'icon']> &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
    variant: Attribute.Enumeration<
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'default'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'block.wysiwig': BlockWysiwig;
      'block.button': BlockButton;
    }
  }
}
