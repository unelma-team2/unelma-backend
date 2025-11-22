import type { Schema, Struct } from '@strapi/strapi';

export interface ContactBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_banner_sections';
  info: {
    displayName: 'BannerSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    attachement: Schema.Attribute.Media<'images' | 'files'>;
    message: Schema.Attribute.Text;
  };
}

export interface ContactContactType extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_types';
  info: {
    displayName: 'ContactType';
  };
  attributes: {
    contact_type: Schema.Attribute.Enumeration<
      [
        'Message / Question',
        'Price quote request',
        'Feedback / Review',
        'Appointment Booking',
      ]
    >;
    email: Schema.Attribute.Email;
    name: Schema.Attribute.String;
    phone_number: Schema.Attribute.Integer;
  };
}

export interface ContactFeedbackForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_feedback_forms';
  info: {
    displayName: 'FeedbackForm';
  };
  attributes: {
    contact_unelma: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    feedback: Schema.Attribute.Enumeration<
      ['Products', 'Services', 'Other (specify below)']
    >;
    feedback_products: Schema.Attribute.Enumeration<
      ['UnelmaMail', 'UnelmaCloud', 'UnelmaCRM', 'Open-Source Software']
    >;
    feedback_services: Schema.Attribute.Enumeration<
      [
        'Cyber Security',
        'AI & Machine Learning',
        'Cloud Sevices',
        'Data Management',
        'Data Science',
        'Web & Mobile Development',
        'Startup Development',
      ]
    >;
    message: Schema.Attribute.Text;
    publish_rating: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    rating: Schema.Attribute.String;
  };
}

export interface ContactRequestQuote extends Struct.ComponentSchema {
  collectionName: 'components_contact_request_quotes';
  info: {
    displayName: 'RequestQuote';
  };
  attributes: {
    message: Schema.Attribute.Text;
    service_name: Schema.Attribute.Component<'contact.service-name', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContactServiceName extends Struct.ComponentSchema {
  collectionName: 'components_contact_service_names';
  info: {
    displayName: 'ServiceName';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface HomeCategory extends Struct.ComponentSchema {
  collectionName: 'components_home_categories';
  info: {
    displayName: 'Category';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    hero_description1: Schema.Attribute.Text;
    hero_description2: Schema.Attribute.Text;
    hero_image: Schema.Attribute.Media<'images' | 'files'>;
    hero_link: Schema.Attribute.String;
    hero_link_description: Schema.Attribute.String;
    hero_title: Schema.Attribute.String;
  };
}

export interface HomeMetrics extends Struct.ComponentSchema {
  collectionName: 'components_home_metrics';
  info: {
    displayName: 'Metrics';
  };
  attributes: {
    label1: Schema.Attribute.String;
    label2: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface HomeOrderingProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_ordering_processes';
  info: {
    displayName: 'OrderingProcess';
  };
  attributes: {
    number: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface HomeProducts extends Struct.ComponentSchema {
  collectionName: 'components_home_products';
  info: {
    displayName: 'Products';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    link_description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeProjectInquiry extends Struct.ComponentSchema {
  collectionName: 'components_home_project_inquiries';
  info: {
    displayName: 'ProjectInquiry';
  };
  attributes: {
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    link_description: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface HomeRecentWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_recent_works';
  info: {
    displayName: 'RecentWorks';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'All',
        'Web Development',
        'Website Design',
        'Mobile Development',
        'Cyber Support',
      ]
    >;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.banner-section': ContactBannerSection;
      'contact.contact-form': ContactContactForm;
      'contact.contact-type': ContactContactType;
      'contact.feedback-form': ContactFeedbackForm;
      'contact.request-quote': ContactRequestQuote;
      'contact.service-name': ContactServiceName;
      'home.category': HomeCategory;
      'home.hero-section': HomeHeroSection;
      'home.metrics': HomeMetrics;
      'home.ordering-process': HomeOrderingProcess;
      'home.products': HomeProducts;
      'home.project-inquiry': HomeProjectInquiry;
      'home.recent-works': HomeRecentWorks;
      'home.services': HomeServices;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
