/**
 * Image utility functions for optimization and responsive handling
 */
import { IMAGE_DEFAULTS } from './constants';

/**
 * Interface for Blur data URL generation
 */
interface BlurOptions {
  width?: number;
  height?: number;
  quality?: number;
}

/**
 * Generate properly sized image URLs for responsive images
 * @param imagePath Base path to the image
 * @param sizes Array of sizes to generate
 * @returns Object with URLs for each size
 */
export const getResponsiveImageUrl = (
  imagePath: string,
  sizes: number[] = [640, 768, 1024, 1280, 1920]
): Record<number, string> => {
  // For external images, return the original URL for all sizes
  if (isExternalImage(imagePath)) {
    return sizes.reduce((acc, size) => {
      acc[size] = imagePath;
      return acc;
    }, { 0: imagePath } as Record<number, string>);
  }

  // For local images
  const basePath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  // Extract file extension
  const extension = basePath.split('.').pop()?.toLowerCase();

  // If not an image type we can resize, return original
  if (!extension || !['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'].includes(extension)) {
    return { 0: basePath };
  }

  // Base path without extension
  const pathWithoutExtension = basePath.substring(0, basePath.lastIndexOf('.'));

  // Create a map of sizes to URLs
  const sizeMap: Record<number, string> = {};

  // For production with proper image processing setup - generate sized URLs
  // With Next.js Image and proper setup, these would point to optimized images
  sizes.forEach(size => {
    // In a real implementation with image processing:
    // sizeMap[size] = `${pathWithoutExtension}-${size}.${extension}`;

    // For now, we'll use Next.js Image's built-in optimization
    sizeMap[size] = basePath;
  });

  // Also include original
  sizeMap[0] = basePath;

  return sizeMap;
};

/**
 * Check if an image is external (not hosted on the same origin)
 * @param src Image source URL
 * @returns True if external image
 */
export const isExternalImage = (src: string): boolean => {
  return src.startsWith('http') || src.startsWith('data:') || src.startsWith('//');
};

/**
 * Generate a placeholder blur image data URL
 * @param color Background color in hex format
 * @param width Width of SVG
 * @param height Height of SVG
 * @returns Base64 encoded SVG string as data URL
 */
export const generateBlurPlaceholder = (
  color: string = '#f0f0f0',
  width: number = 80,
  height: number = 80
): string => {
  try {
    // Create a simple SVG with the given color
    const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`;

    // Browser environment
    if (typeof window !== 'undefined') {
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }

    // Node.js environment - handle Buffer reference more safely
    if (typeof Buffer !== 'undefined') {
      return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    } else {
      // Fallback for environments without Buffer
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    }
  } catch (error) {
    // Fallback to a simple transparent data URL
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  }
};

/**
 * Get optimal image quality based on connection speed
 * @returns Quality value between 60-90
 */
export const getOptimalImageQuality = (): number => {
  if (typeof navigator === 'undefined') return IMAGE_DEFAULTS.quality;

  // Use Network Information API if available
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;

    if (connection) {
      const type = connection.effectiveType;

      switch (type) {
        case 'slow-2g':
        case '2g':
          return 60; // Lower quality for very slow connections
        case '3g':
          return 70; // Medium quality for moderate connections
        case '4g':
          return 85; // Higher quality for fast connections
        default:
          return IMAGE_DEFAULTS.quality;
      }
    }
  }

  return IMAGE_DEFAULTS.quality;
};

/**
 * Get appropriate image dimensions based on original aspect ratio
 * @param originalWidth Original width
 * @param originalHeight Original height
 * @param targetWidth Target width (optional)
 * @param targetHeight Target height (optional)
 * @returns Object with width and height
 */
export const getImageDimensions = (
  originalWidth: number, 
  originalHeight: number,
  targetWidth?: number,
  targetHeight?: number
): { width: number; height: number } => {
  // If both target dimensions are provided, use them
  if (targetWidth && targetHeight) {
    return { width: targetWidth, height: targetHeight };
  }

  // If only width is provided, calculate height based on original aspect ratio
  if (targetWidth) {
    const aspectRatio = originalWidth / originalHeight;
    return { 
      width: targetWidth, 
      height: Math.round(targetWidth / aspectRatio) 
    };
  }

  // If only height is provided, calculate width based on original aspect ratio
  if (targetHeight) {
    const aspectRatio = originalWidth / originalHeight;
    return { 
      width: Math.round(targetHeight * aspectRatio), 
      height: targetHeight 
    };
  }

  // If no target dimensions are provided, return original dimensions
  return { width: originalWidth, height: originalHeight };
};

/**
 * Generate a size attribute for Next.js Image component
 * @param breakpoints Configuration for different screen sizes
 * @returns Sizes string
 */
export const generateSizesAttribute = (
  breakpoints: { screenWidth: number; imageWidth: string }[] = []
): string => {
  if (breakpoints.length === 0) {
    return '100vw'; // Default to full viewport width
  }

  // Sort breakpoints by screen width (descending)
  const sortedBreakpoints = [...breakpoints].sort((a, b) => b.screenWidth - a.screenWidth);
  
  // Generate sizes attribute
  return sortedBreakpoints
    .map((bp, index) => {
      // For all but the last breakpoint, include the media query
      if (index < sortedBreakpoints.length - 1) {
        return `(max-width: ${bp.screenWidth}px) ${bp.imageWidth}`;
      }
      // For the last (smallest) breakpoint, just include the image width
      return bp.imageWidth;
    })
    .join(', ');
};

// The enhanced version of generateBlurPlaceholder is defined above, so we don't need this version

/**
 * Common image sizes and breakpoints for the site
 */
export const commonBreakpoints = {
  hero: [
    { screenWidth: 1536, imageWidth: '100vw' }, // 2xl
    { screenWidth: 1280, imageWidth: '100vw' }, // xl
    { screenWidth: 1024, imageWidth: '100vw' }, // lg
    { screenWidth: 768, imageWidth: '100vw' },  // md
    { screenWidth: 640, imageWidth: '100vw' },  // sm
  ],
  content: [
    { screenWidth: 1536, imageWidth: '70vw' },  // 2xl
    { screenWidth: 1280, imageWidth: '80vw' },  // xl
    { screenWidth: 1024, imageWidth: '90vw' },  // lg
    { screenWidth: 768, imageWidth: '100vw' },  // md
    { screenWidth: 640, imageWidth: '100vw' },  // sm
  ],
  card: [
    { screenWidth: 1536, imageWidth: '25vw' },  // 2xl
    { screenWidth: 1280, imageWidth: '33vw' },  // xl
    { screenWidth: 1024, imageWidth: '50vw' },  // lg
    { screenWidth: 768, imageWidth: '50vw' },   // md
    { screenWidth: 640, imageWidth: '100vw' },  // sm
  ],
  thumbnail: [
    { screenWidth: 1536, imageWidth: '15vw' },  // 2xl
    { screenWidth: 1280, imageWidth: '20vw' },  // xl
    { screenWidth: 1024, imageWidth: '25vw' },  // lg
    { screenWidth: 768, imageWidth: '33vw' },   // md
    { screenWidth: 640, imageWidth: '50vw' },   // sm
  ],
};