const createNextIntlPlugin = require('next-intl/plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Pre-optimized WebP/AVIF in public/; avoids sharp failures on external volumes
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Webpack filesystem cache uses rename(…pack.gz_, …pack.gz). On exFAT/external
    // volumes that can throw ENOENT; disable dev cache on this project path.
    if (dev) {
      config.cache = false
    }
    return config
  },
  async redirects() {
    return [
      { source: '/imprint', destination: '/impressum', permanent: true },
      { source: '/privacy', destination: '/datenschutz', permanent: true },
      { source: '/en/imprint', destination: '/en/impressum', permanent: true },
      { source: '/en/privacy', destination: '/en/datenschutz', permanent: true },
      { source: '/de', destination: '/', permanent: true },
      { source: '/de/:path*', destination: '/:path*', permanent: true },
    ]
  },
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

module.exports = withNextIntl(nextConfig)
