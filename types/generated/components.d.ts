import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'seo_information';
  };
  attributes: {
    Seo_title: Attribute.String & Attribute.Required;
    Seo_description: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
