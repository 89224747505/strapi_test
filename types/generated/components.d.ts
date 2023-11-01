import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogFeaturedPost extends Schema.Component {
  collectionName: 'components_blog_featured_posts';
  info: {
    displayName: 'FeaturedPost';
    icon: 'expand';
  };
  attributes: {
    FeaturedPostHeading: Attribute.String & Attribute.Required;
    post: Attribute.Relation<
      'blog.featured-post',
      'oneToOne',
      'api::post.post'
    >;
  };
}

export interface BlogPostSelection extends Schema.Component {
  collectionName: 'components_blog_post_selections';
  info: {
    displayName: 'PostSelection';
    icon: 'calendar';
  };
  attributes: {
    tags: Attribute.Relation<
      'blog.post-selection',
      'oneToMany',
      'api::tag.tag'
    >;
    SelectionHeading: Attribute.String & Attribute.Required;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'check';
  };
  attributes: {
    Label: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'command';
    description: '';
  };
  attributes: {
    Images: Attribute.Media & Attribute.Required;
    CallToAction: Attribute.String & Attribute.Required;
    Buttons: Attribute.Component<'layout.button', true> & Attribute.Required;
  };
}

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
      'blog.featured-post': BlogFeaturedPost;
      'blog.post-selection': BlogPostSelection;
      'layout.button': LayoutButton;
      'layout.hero-section': LayoutHeroSection;
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
