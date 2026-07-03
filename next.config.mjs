/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pre-optimized WebP/AVIF in public/; avoids sharp failures on external volumes
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/imprint', destination: '/impressum', permanent: true },
      { source: '/privacy', destination: '/datenschutz', permanent: true },
    ]
  },
}

export default nextConfig
