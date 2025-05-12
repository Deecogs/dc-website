"use client";
import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive design that listens to CSS media query changes
 * 
 * @param query - CSS media query string (e.g., "(min-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  // Initialize state with null for SSR compatibility
  const [matches, setMatches] = useState<boolean>(false);
  
  useEffect(() => {
    // SSR check
    if (typeof window === 'undefined') return;
    
    // Create media query list
    const media = window.matchMedia(query);
    
    // Update state with initial value
    setMatches(media.matches);
    
    // Define listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add event listener
    media.addEventListener('change', listener);
    
    // Cleanup function
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]); // Re-run if query changes

  return matches;
}