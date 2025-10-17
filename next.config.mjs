/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['./src/styles', './node_modules'],
  },
  // Enable static exports for deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig