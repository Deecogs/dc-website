"use client";

import React, { Suspense, lazy, ComponentType } from 'react';

/**
 * Loading fallback component
 */
const DefaultLoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[200px]">
    <div className="loading-spinner"></div>
  </div>
);

/**
 * Error fallback component
 */
const DefaultErrorFallback = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div className="p-4 mx-auto text-center bg-red-50 rounded-lg max-w-md">
    <h2 className="mb-2 text-lg font-semibold text-red-800">Error Loading Component</h2>
    <p className="mb-4 text-sm text-red-600">{error.message}</p>
    <button
      onClick={reset}
      className="px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      Try Again
    </button>
  </div>
);

/**
 * Dynamic import with error boundary for lazy loading components
 * @param importFunc Import function
 * @param LoadingComponent Custom loading component
 * @param ErrorComponent Custom error component
 * @returns Lazily loaded component with suspense and error handling
 */
export function dynamicImport<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  LoadingComponent = DefaultLoadingFallback,
  ErrorComponent = DefaultErrorFallback
): T {
  const LazyComponent = lazy(importFunc);

  // Create a wrapper to handle errors
  const WithErrorBoundary = (props: React.ComponentProps<T>) => {
    const [error, setError] = React.useState<Error | null>(null);

    const handleCatch = (err: Error) => {
      console.error('Error loading component:', err);
      setError(err);
    };

    const reset = () => {
      setError(null);
    };

    if (error) {
      return <ErrorComponent error={error} reset={reset} />;
    }

    return (
      <React.Suspense fallback={<LoadingComponent />}>
        <LazyComponent {...props} />
      </React.Suspense>
    );
  };

  return WithErrorBoundary as unknown as T;
}

/**
 * Custom hook to load components lazily
 * 
 * @example
 * ```tsx
 * const HeavyComponent = useLazyComponent(() => import('../components/HeavyComponent'));
 * ```
 */
export function useLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  LoadingComponent = DefaultLoadingFallback,
  ErrorComponent = DefaultErrorFallback
): T {
  return React.useMemo(
    () => dynamicImport(importFunc, LoadingComponent, ErrorComponent),
    [importFunc]
  );
}

export default useLazyComponent;