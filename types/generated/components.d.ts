import type { Struct, Schema } from '@strapi/strapi';

export interface SharedThongTinXe extends Struct.ComponentSchema {
  collectionName: 'components_shared_thong_tin_xes';
  info: {
    displayName: 'Th\u00F4ng tin xe';
    icon: 'car';
    description: '';
  };
  attributes: {
    ten_xe: Schema.Attribute.String;
    gia_thue_theo_gio: Schema.Attribute.BigInteger;
    hinh_xe: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    thong_tin_chi_tiet: Schema.Attribute.RichText;
    so_cho_ngoi: Schema.Attribute.Integer;
    hinh_xe_dai_dien: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    thong_tin_ngan_gon: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.thong-tin-xe': SharedThongTinXe;
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
    }
  }
}
