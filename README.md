# Personal Website - Next.js Migration

This is the Next.js version of my personal portfolio website, optimized for performance and maintainability.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **next-themes** - Theme management (dark/light mode)
- **React Context** - Internationalization (PT/EN)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This will create a static export in the `out/` directory.

## Features

- ✅ **Pixel-Perfect Design** - Maintains original aesthetic
- ✅ **Performance Optimized** - Lighthouse 100 score target
- ✅ **Dark/Light Theme** - Flash-free theme switching with `next-themes`
- ✅ **Multilingual** - Portuguese and English support
- ✅ **Static Export** - Deployable to GitHub Pages
- ✅ **Optimized Fonts** - Self-hosted fonts via `next/font`
- ✅ **Image Optimization** - Using `next/image` component

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Tools.tsx
│   │   └── Contact.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── LanguageSwitch.tsx
├── contexts/
│   └── LanguageContext.tsx
├── locales/
│   └── translations.ts
└── public/
    └── assets/
```

## Deployment

This site is configured for static export and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

All rights reserved © 2026 Matheus Lôbo
