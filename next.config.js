/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  env: {
    // Inlined at build time so client components can prefix /pics, /vids on GitHub Pages.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // For GitHub Pages: repo name as base path (e.g. /PashaWebsite). Leave empty for local dev or custom domain.
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true, // required for static export when hosting on GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true, // no ESLint in project; remove when adding eslint
  },
  typescript: {
    ignoreBuildErrors: false, // keep type-checking
  },
}

module.exports = nextConfig
