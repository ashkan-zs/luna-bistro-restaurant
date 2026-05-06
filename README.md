# Luna Bistro Restaurant Landing Page

A polished, responsive restaurant landing page built for a fictional modern dining brand, Luna Bistro. The project focuses on strong visual presentation, smooth section animations, reusable React components, and locally managed image assets.

This project is intended as a portfolio piece that demonstrates frontend structure, design implementation, and production-style organization in a Vite + React application.

## Live Demo

https://luna-bistro-restaurant.vercel.app/

## Features

- Full-screen visual hero section with animated entrance content
- Sticky navbar with scroll-aware styling
- About, seasonal menu, feature highlights, gallery, testimonials, CTA, contact, and footer sections
- Reusable section and layout components
- Static content extracted into dedicated data modules
- Local image assets managed through Vite imports
- Responsive layout for mobile, tablet, and desktop
- Motion-based reveal animations
- Tailwind CSS utility styling with custom design tokens

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Project Structure

```txt
src/
  assets/images/          Local restaurant, menu, gallery, and review images
  components/
    layout/               Navbar and footer components
    sections/             Page sections used by App.tsx
  data/                   Static menu, feature, and review data
  lib/                    Shared animation variants
  types/                  Asset module declarations
  App.tsx                 Page composition
  main.tsx                React entry point
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run TypeScript checks:

```bash
npm run lint
```

## Portfolio Notes

The app was refactored from a single-page component into a more maintainable structure:

- `App.tsx` now acts only as the composition layer.
- Section UI lives in `src/components/sections`.
- Repeated/static content lives in `src/data`.
- External image URLs were replaced with local assets in `src/assets/images`.
- A Vite/TypeScript alias is configured so imports can use `@/...`.

## Status

The project builds successfully with:

```bash
npm run build
```
