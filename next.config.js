/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./node_modules'],
  },
  // Remove experimental.appDir if you're on Next.js 13.4+
  // output: 'export', // Only add this when ready to deploy static site
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ethiowds' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ethiowds/' : '',
}

module.exports = nextConfig