/**
 * SEO utility functions and types
 */
import { SEO_DEFAULTS } from './constants';

/**
 * Interface for SEO metadata
 */
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  twitterHandle?: string;
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noIndex?: boolean;
}

/**
 * Generate complete SEO props with defaults
 * @param props Custom SEO properties
 * @returns Complete SEO properties with defaults
 */
export const getSEOProps = (props: SEOProps = {}): Required<SEOProps> => {
  return {
    title: props.title || SEO_DEFAULTS.title,
    description: props.description || SEO_DEFAULTS.description,
    keywords: props.keywords || [],
    canonicalUrl: props.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    ogType: props.ogType || 'website',
    ogTitle: props.ogTitle || props.title || SEO_DEFAULTS.title,
    ogDescription: props.ogDescription || props.description || SEO_DEFAULTS.description,
    ogImage: props.ogImage || {
      url: '/image/og-image.jpg', // Default OG image path
      width: 1200,
      height: 630,
      alt: SEO_DEFAULTS.title,
    },
    twitterHandle: props.twitterHandle || SEO_DEFAULTS.twitter.handle,
    twitterCardType: props.twitterCardType || 'summary_large_image',
    noIndex: props.noIndex || false,
  };
};

/**
 * Generate structured data for different entities
 */
export const structuredData = {
  /**
   * Generate Organization structured data
   * @returns Organization JSON-LD
   */
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DeeCogs',
    url: 'https://deecogs.com',
    logo: 'https://deecogs.com/image/white-logo.png',
    sameAs: [
      'https://twitter.com/deecogs',
      'https://linkedin.com/company/deecogs',
      'https://facebook.com/deecogs',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'customer service',
      email: 'contact@deecogs.com',
      availableLanguage: ['English'],
    },
  }),

  /**
   * Generate Article structured data
   * @param article Article data
   * @returns Article JSON-LD
   */
  article: (article: {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    datePublished: string;
    dateModified?: string;
    authorName: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DeeCogs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://deecogs.com/image/white-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }),

  /**
   * Generate BreadcrumbList structured data
   * @param items Breadcrumb items
   * @returns BreadcrumbList JSON-LD
   */
  breadcrumbs: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  /**
   * Generate FAQ structured data
   * @param items FAQ items
   * @returns FAQPage JSON-LD
   */
  faq: (items: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }),

  /**
   * Generate ProductType structured data
   * @param product Product data
   * @returns Product JSON-LD
   */
  product: (product: {
    name: string;
    description: string;
    url: string;
    imageUrl: string;
    category?: string;
  }) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.imageUrl,
    url: product.url,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'DeeCogs',
    },
  }),
};

/**
 * Generate JSON-LD script tag content 
 * @param data Structured data object
 * @returns JSON-LD string
 */
export const generateJSONLD = (data: object): string => {
  return JSON.stringify(data);
};

/**
 * Generate canonical URL
 * @param path Path relative to domain root
 * @returns Absolute URL
 */
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://deecogs.com';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Combine page title with site name
 * @param title Page title
 * @returns Formatted title
 */
export const formatPageTitle = (title: string): string => {
  if (!title) return SEO_DEFAULTS.title;
  return `${title} | DeeCogs`;
};