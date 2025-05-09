# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DeeCogs Website is a modern web application built with Next.js, TypeScript, and Tailwind CSS. It's a corporate website for DeeCogs, an AI-driven solutions company focusing on healthcare, document processing, and other business solutions.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Project Architecture

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP
- **UI Components**: Flowbite React
- **Email Service**: EmailJS

### Key Project Structure

- `/app`: Next.js app router pages and API routes
  - `/api`: Backend API endpoints
  - Page routes follow Next.js App Router conventions
- `/components`: React components
  - `/common`: Reusable UI components (Button, Header, Footer, etc.)
  - `/blog`: Blog-specific components
  - `/sections`: Page section components for the homepage and other pages
- `/data`: Data files including blog posts
- `/context`: React context providers
- `/utils`: Utility functions and helpers
- `/hooks`: Custom React hooks
- `/styles`: Global styles and animations
- `/types`: TypeScript type definitions

### Key Features

1. **Responsive Design**: The site is fully responsive with custom responsive typography and spacing
2. **Animations**: Uses Framer Motion for component animations and transitions
3. **Blog System**: Static blog implementation with categories, tags, and author pages
4. **Contact Form**: EmailJS integration for sending contact form submissions
5. **Modals**: Client-side modal system for contact/demo request forms
6. **Dynamic Navigation**: Responsive header with mobile menu and dropdowns

## Important Notes for Development

### Blog System

The blog system uses static data from `src/data/blogData.ts`. To add new blog posts:
1. Add a new entry to the `blogPosts` array in `blogData.ts`
2. Blog content is stored as HTML strings within the data file
3. Each post requires metadata like title, slug, author info, categories, tags, etc.

### UI Components

- Most UI components use the Flowbite React library with custom styling
- Button component (`components/common/Button.tsx`) is a wrapper with standardized styling
- Animations use Framer Motion for transitions and effects

### Contact Forms

- Forms use EmailJS to send messages
- Environment variables required:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_USER_ID`

### Styling Approach

- Uses Tailwind CSS with custom configuration in `tailwind.config.ts`
- Custom color scheme with primary colors and responsive sizing
- Custom animations defined in `styles/animations.css`

### Next.js Configuration

- Uses static exports (`output: "export"` in `next.config.mjs`)
- Has TypeScript and ESLint error checking disabled during builds
- Uses path aliases (e.g., `@/components/...`)

## Common Workflows

### Adding a New Page

1. Create a new directory in `/app` with the route name
2. Add a `page.tsx` file with the page component
3. Use existing components or create new ones as needed
4. Update navigation in `Header.tsx` if the page should be linked in the menu

### Modifying the Blog

1. To add/edit blog posts, modify the `blogData.ts` file
2. To change blog page layouts, modify components in the `/components/blog` directory

### Adding New Components

1. Create component files in the appropriate directory
2. Follow the existing pattern of using Flowbite components with custom styling
3. Use Framer Motion for animations following existing patterns

### Modifying Styles

1. Add custom styles to `tailwind.config.ts` for global theme changes
2. Use Tailwind classes directly in components
3. For custom animations, add them to `styles/animations.css`