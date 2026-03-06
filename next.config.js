/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // For GitHub Pages: repo name as base path (e.g. /PashaWebsite). Leave empty for local dev or custom domain.
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH ? `${process.env.BASE_PATH}/` : '',
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
