"use client";

import React from 'react';
import Head from 'next/head';
import { SEOProps, getSEOProps, formatPageTitle } from '@/utils/seoUtils';

/**
 * SEO component for consistent metadata across the site
 * 
 * @example
 * ```tsx
 * <SEO 
 *   title="Product Page"
 *   description="Learn about our amazing products"
 *   canonicalUrl="https://deecogs.com/products"
 * />
 * ```
 */
const SEO: React.FC<SEOProps> = (props) => {
  const seo = getSEOProps(props);
  const formattedTitle = formatPageTitle(seo.title);

  return (
    <Head>
      {/* Basic metadata */}
      <title>{formattedTitle}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords.length > 0 && (
        <meta name="keywords" content={seo.keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:site_name" content="DeeCogs" />
      <meta property="og:url" content={seo.canonicalUrl} />
      
      {/* OG Image */}
      <meta property="og:image" content={seo.ogImage.url} />
      {seo.ogImage.width && (
        <meta property="og:image:width" content={seo.ogImage.width.toString()} />
      )}
      {seo.ogImage.height && (
        <meta property="og:image:height" content={seo.ogImage.height.toString()} />
      )}
      {seo.ogImage.alt && (
        <meta property="og:image:alt" content={seo.ogImage.alt} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitterCardType} />
      <meta name="twitter:site" content={seo.twitterHandle} />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />
      <meta name="twitter:image" content={seo.ogImage.url} />
      {seo.ogImage.alt && (
        <meta name="twitter:image:alt" content={seo.ogImage.alt} />
      )}
      
      {/* Robots */}
      {seo.noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Viewport for responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="en" />
      
      {/* Color scheme */}
      <meta name="theme-color" content="#FE6623" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Apple touch icon */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Manifest */}
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

export default SEO;