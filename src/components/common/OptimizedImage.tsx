import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  loading?: 'eager' | 'lazy';
}

/**
 * Enhanced OptimizedImage component with improved performance and accessibility
 * 
 * - Automatically detects external images and handles them properly
 * - Provides proper fallbacks for image loading
 * - Supports responsive sizing with the sizes prop
 * - Includes proper loading strategies (eager, lazy, priority)
 * - Implements blur-up loading for a better user experience
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 80,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  objectFit = 'cover',
  objectPosition = 'center',
  placeholder = 'empty',
  blurDataURL,
  loading,
}) => {
  // Check if image is external (starts with http or https)
  const isExternal = src.startsWith('http');
  
  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+';
  
  // Determine final blur data URL based on provided or default
  const finalBlurDataURL = placeholder === 'blur' ? (blurDataURL || defaultBlurDataURL) : undefined;
  
  // Determine loading strategy based on inputs
  const finalLoading = priority ? undefined : (loading || 'lazy');
  
  // Style props for objectFit and objectPosition
  const imgStyle: React.CSSProperties = {
    objectFit: objectFit as any,
    objectPosition,
  };
  
  return (
    <div className={`relative ${fill ? 'h-full w-full' : ''} ${className || ''}`}>
      {isExternal ? (
        // External image handling
        <Image
          src={src}
          alt={alt}
          width={!fill ? (width || 1200) : undefined}
          height={!fill ? (height || 800) : undefined}
          className={fill ? 'object-cover' : ''}
          priority={priority}
          quality={quality}
          fill={fill}
          sizes={sizes}
          loading={finalLoading}
          style={fill ? imgStyle : undefined}
          unoptimized={false} // We optimize external images now with new approach
          placeholder={placeholder === 'blur' ? placeholder : undefined}
          blurDataURL={finalBlurDataURL}
        />
      ) : (
        // Local image handling (from public directory)
        <Image
          src={src}
          alt={alt}
          width={!fill ? (width || 1200) : undefined}
          height={!fill ? (height || 800) : undefined}
          className={fill ? 'object-cover' : ''}
          priority={priority}
          quality={quality}
          fill={fill}
          sizes={sizes}
          loading={finalLoading}
          style={fill ? imgStyle : undefined}
          placeholder={placeholder === 'blur' ? placeholder : undefined}
          blurDataURL={finalBlurDataURL}
        />
      )}
    </div>
  );
};

export default OptimizedImage;