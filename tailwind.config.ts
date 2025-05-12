const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#FE6623',
          light: 'rgba(254, 102, 35, 0.2)',
          hover: 'rgba(254, 102, 35, 0.9)',
          dark: '#E54E15',
          50: 'rgba(254, 102, 35, 0.05)',
          100: 'rgba(254, 102, 35, 0.1)',
          200: 'rgba(254, 102, 35, 0.2)',
          300: 'rgba(254, 102, 35, 0.3)',
          400: 'rgba(254, 102, 35, 0.4)',
          500: '#FE6623', // Main primary color
          600: '#E55B1F',
          700: '#CC501B',
          800: '#B24417',
          900: '#993913'
        },
        secondary: {
          DEFAULT: '#FF8A50',
          light: 'rgba(255, 138, 80, 0.2)',
          hover: 'rgba(255, 138, 80, 0.9)',
          50: 'rgba(255, 138, 80, 0.05)',
          100: 'rgba(255, 138, 80, 0.1)',
          200: 'rgba(255, 138, 80, 0.2)',
          300: 'rgba(255, 138, 80, 0.3)',
          400: 'rgba(255, 138, 80, 0.4)',
          500: '#FF8A50', // Main secondary color
          600: '#FF7E3D',
          700: '#FF6D22',
          800: '#FF5700',
          900: '#E54E00'
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],      
        'base': ['1rem', { lineHeight: '1.5rem' }],      
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],      
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],      
        '2xl': ['1.5rem', { lineHeight: '2rem' }],       
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],     
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],       
        '5xl': ['3rem', { lineHeight: '1' }],     
        '6xl': ['3.75rem', { lineHeight: '1' }],       
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        'full': '9999px'
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 4px 14px 0 rgba(254, 102, 35, 0.3)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none'
      },
      transitionDuration: {
        'DEFAULT': '300ms',
        'fast': '150ms',
        'slow': '500ms'
      },
      transitionTimingFunction: {
        'DEFAULT': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'gradient-x': 'gradientX 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'auto': 'auto',
      },
      gridTemplateColumns: {
        'auto-fill-100': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fill-150': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-radial': {
          'background-image': 'radial-gradient(var(--tw-gradient-stops))',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.text-shadow': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
  safelist: [
    'text-primary',
    'bg-primary',
    'border-primary',
    'text-white',
    'bg-white',
    'border-white',
    'text-gray-500',
    'text-gray-700',
    'text-gray-900',
    'rounded-full',
    'rounded-xl',
    'rounded-2xl',
    'shadow-sm',
    'shadow',
    'shadow-md',
    'shadow-lg',
    'shadow-xl',
    'hover:shadow-md',
    'hover:shadow-lg',
    'hover:shadow-xl',
    'focus:ring-2',
    'focus:ring-primary',
    'focus:ring-offset-2',
    'transition-all',
    'duration-300',
    'ease-in-out',
  ],
} satisfies Config;