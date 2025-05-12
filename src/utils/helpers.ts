/**
 * Common utility functions used throughout the application
 */

/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string to format
 * @param locale - Locale to use for formatting
 * @returns Formatted date string
 */
export const formatDate = (dateString: string, locale: string = 'en-US'): string => {
  if (!dateString) return '';

  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Converts kebab-case or snake_case to title case
 * @param str - String to convert
 * @returns Title-cased string
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';

  return str
    .replace(/[-_]/g, ' ')
    .replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
};

/**
 * Generates a URL-friendly slug from any string
 * @param str - String to convert
 * @returns URL-friendly slug
 */
export const slugify = (str: string): string => {
  if (!str) return '';

  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Debounce function to limit execution rate
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return function(...args: Parameters<T>): void {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function to limit execution rate
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;

  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Combines multiple class names, filtering out falsy values
 * Similar to the popular classnames or clsx libraries
 * @param classes - Class names to combine
 * @returns Combined class string
 */
export const classNames = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Checks if the code is running on the client side
 * @returns Whether code is running in browser
 */
export const isClient = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Checks if the device has touch capability
 * @returns Whether device supports touch
 */
export const isTouchDevice = (): boolean => {
  if (!isClient()) return false;

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );
};

/**
 * Detects if user prefers reduced motion
 * @returns Whether reduced motion is preferred
 */
export const prefersReducedMotion = (): boolean => {
  if (!isClient()) return false;

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Converts hex color to RGBA
 * @param hex - Hex color string
 * @param alpha - Alpha value (0-1)
 * @returns RGBA color string
 */
export const hexToRgba = (hex: string, alpha: number = 1): string => {
  if (!hex || typeof hex !== 'string') return `rgba(0, 0, 0, ${alpha})`;

  // Remove hash if present
  hex = hex.replace(/^#/, '');

  // Parse hex
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  // Return rgba string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};