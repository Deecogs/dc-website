/**
 * Theme configuration for the application
 * Contains styles, overrides, and customizations for components
 */
import { COLORS } from './constants';

/**
 * Custom theme overrides for Flowbite components
 * Applied to Flowbite components globally
 */
export const customTheme = {
  navbar: {
    root: {
      base: "py-2.5 px-4 sm:px-4 md:flex md:items-center md:justify-between",
    },
    collapse: {
      base: "w-full sm:w-[440px] md:w-[532px] xl:w-full mobile-menu transition-transform fixed z-40 right-0 top-0 xl:static xl:block xl:w-auto",
      hidden: {
        on: "translate-x-full",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex xl:hidden",
      icon: "text-white",
    },
    brand: {
      base: "flex items-center",
    },
  },
  modal: {
    content: {
      base: "relative h-screen w-full p-0",
      inner: "relative flex max-h-screen h-screen flex-col bg-image-modal rounded-xl",
    },
    header: {
      base: "flex !bg-transparent lg:!px-[200px] items-start justify-start",
      close: {
        base: "hidden", // Hide default close button to use custom one
        icon: "h-5 w-5",
      },
    },
    body: {
      base: "p-6 flex-1 overflow-auto",
    },
    footer: {
      base: "flex items-center space-x-2 px-6 py-4",
    },
  },
  button: {
    base: "group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
    color: {
      primary: "text-white bg-primary border-primary hover:bg-primary-700 hover:border-primary-700",
      secondary: "text-white bg-secondary border-secondary hover:bg-secondary-700 hover:border-secondary-700",
    },
    outline: {
      on: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
      off: "",
    },
    size: {
      xs: "text-xs px-2 py-1",
      sm: "text-sm px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
      xl: "text-base px-6 py-3",
    },
    pill: {
      on: "rounded-full",
      off: "rounded-lg",
    },
  },
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-6",
    },
    img: {
      base: "rounded-t-lg",
    },
    header: {
      base: "flex items-center justify-between px-6 pt-6",
    },
    body: {
      base: "flex-1 px-6 py-4",
    },
    footer: {
      base: "px-6 pb-6 pt-2",
    },
  },
};

/**
 * Button variants for the custom Button component
 */
export const buttonVariants = {
  primary: "bg-primary hover:bg-primary-dark text-white border-transparent",
  secondary: "bg-secondary hover:bg-secondary-dark text-white border-transparent",
  tertiary: "bg-tertiary hover:bg-tertiary-dark text-white border-transparent",
  outline: "bg-transparent border border-current hover:bg-primary hover:text-white hover:border-primary",
  ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700",
  link: "text-primary hover:underline bg-transparent",
};

/**
 * Button size variants
 */
export const buttonSizes = {
  xs: "px-2.5 py-1.5 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
  xl: "px-6 py-3 text-xl",
};

/**
 * Gradient styles for use throughout the application
 */
export const gradients = {
  primaryToSecondary: `linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%)`,
  primaryToDark: `linear-gradient(180deg, ${COLORS.primary} 0%, ${COLORS.primaryDark} 100%)`,
  headingGradient: `linear-gradient(to right, ${COLORS.primary} 50%, ${COLORS.black} 100%)`,
  darkOverlay: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)",
};

/**
 * Animation variants for Framer Motion
 */
export const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  // With reduced motion support
  withReducedMotion: {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }
  }
};