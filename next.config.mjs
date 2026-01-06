/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Required for static HTML export to GitHub Pages
  reactStrictMode: true,
  // Disable development indicators that might create portal elements
  devIndicators: {
    buildActivity: false,
  },
}

export default nextConfig
