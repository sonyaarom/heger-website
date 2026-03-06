# GeoMessTechnik Heger Website

A modern, SEO-optimized website for GeoMessTechnik Heger, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern, Beautiful UI** - Clean, professional design with smooth animations
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✏️ **Content Management** - Easy-to-use admin interface for editing website content
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🌐 **Multi-language Ready** - Easy to extend for multiple languages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Content Management

### Editing Website Content

1. Navigate to `/admin` in your browser
2. Edit any text field you want to change
3. Click "Save Changes" to save your edits
4. Changes are stored in browser localStorage (in production, you'd want to connect this to a database/API)

### Content Structure

All website content is stored in `data/content.json`. The structure includes:

- **Site Information**: Name, description, contact details
- **Navigation**: Menu items
- **Home Page**: Hero section, feature sections, featured product
- **Page Content**: Individual pages (Gyroscopes, Repair, Purchase, Contact)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── admin/             # Admin interface for content editing
│   ├── contact/           # Contact page
│   ├── gyroscopes/        # Gyroscopes page
│   ├── repair/            # Repair page
│   ├── purchase/          # Purchase page
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Footer component
│   ├── Hero.tsx           # Hero section
│   ├── FeatureSection.tsx # Feature cards
│   └── FeaturedProduct.tsx # Featured product section
├── data/                  # Content data
│   └── content.json       # All website content
└── lib/                   # Utility functions
    └── content.ts         # Content management utilities
```

## SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data (JSON-LD) for search engines
- Semantic HTML structure
- Optimized page titles and descriptions
- Canonical URLs

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme. The primary color is currently set to blue.

### Styling

All styles use Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component-specific styles in individual component files

## Deployment

This website can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

For Vercel:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

## Future Enhancements

- Connect admin panel to a database/API
- Add image upload functionality
- Implement multi-language support
- Add blog/news section
- Integrate contact form with email service

## License

Copyright © 2026 GeoMessTechnik Heger. All rights reserved.
