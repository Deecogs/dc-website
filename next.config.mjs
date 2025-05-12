/**
 * Next.js configuration with optimizations for performance and bundle size
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export", // For static site generation
  
  // Error handling settings (consider enabling these in production)
  typescript: {
    ignoreBuildErrors: true, // Consider setting to false for production
  },
  eslint: {
    ignoreDuringBuilds: true, // Consider setting to false for production
  },
  
  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security
  
  // Bundle optimizations
  swcMinify: true, // Use SWC minifier for faster builds
  compress: true, // Enable HTTP compression
  
  // Image configuration for static export
  images: {
    unoptimized: true, // Required for static export
    domains: [
      'deecogs.com',
      'cdn.deecogs.com',
      'images.unsplash.com',
      'picsum.photos'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.deecogs.com',
      },
    ],
  },
  
  // Optimization for static export
  trailingSlash: true, // Ensures URLs end with trailing slash for better static compatibility
  
  // Simple webpack optimizations (without requiring external packages)
  webpack: (config, { dev, isServer }) => {
    // Add optimizations for production
    if (!dev) {
      // Exclude large dependencies from main bundles (example)
      config.externals = [...(config.externals || []), 'lodash'];
    }
    
    // Note: For bundle analysis in development, you can use:
    // 1. Install @next/bundle-analyzer: npm install --save-dev @next/bundle-analyzer
    // 2. Create a separate configuration file that uses dynamic imports
    
    return config;
  },
  
  // Environment configuration
  env: {
    SITE_URL: 'https://deecogs.com',
    ENVIRONMENT: process.env.NODE_ENV,
  },
};

export default nextConfig;