/**
 * Application-wide constants
 */

// Brand colors
export const COLORS = {
  primary: '#FE6623',
  primaryDark: '#E15A1F',
  secondary: '#1c77cb',
  tertiary: '#7C3AED',
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF', 
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  }
};

// Animation durations
export const ANIMATION = {
  fast: 0.2,
  medium: 0.5,
  slow: 0.8,
  extraSlow: 1.5,
  pulse: {
    duration: 8,
    repeat: 'Infinity',
  },
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

// Media queries for hooks
export const MEDIA_QUERIES = {
  mobile: `(max-width: ${BREAKPOINTS.sm}px)`,
  tablet: `(max-width: ${BREAKPOINTS.lg}px)`,
  desktop: `(min-width: ${BREAKPOINTS.lg + 1}px)`,
  largeDesktop: `(min-width: ${BREAKPOINTS.xl + 1}px)`,
  touchDevice: `(pointer: coarse)`,
  reducedMotion: `(prefers-reduced-motion: reduce)`,
};

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/deecogs',
  linkedin: 'https://linkedin.com/company/deecogs',
  facebook: 'https://facebook.com/deecogs',
  instagram: 'https://instagram.com/deecogs'
};

// Contact information
export const CONTACT_INFO = {
  email: 'contact@deecogs.com',
  phone: '+1 (123) 456-7890',
  address: 'Deecogs Headquarters, San Francisco, CA'
};

// Image loading and optimization defaults
export const IMAGE_DEFAULTS = {
  quality: 80,
  placeholderBlur: true,
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
};

// SEO defaults
export const SEO_DEFAULTS = {
  title: 'DeeCogs - AI-Driven Business Solutions',
  description: 'DeeCogs provides innovative AI solutions for healthcare, document processing, and business intelligence.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deecogs.com',
    site_name: 'DeeCogs',
  },
  twitter: {
    handle: '@deecogs',
    site: '@deecogs',
    cardType: 'summary_large_image',
  },
};