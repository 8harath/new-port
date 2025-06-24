/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ]
  },  async redirects() {
    return [
      {
        source: '/8harath',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bharath',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bharath-k',
        destination: '/',
        permanent: true,
      },
      // SEO-friendly redirects for common variations
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // Dynamic sitemap redirect
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: false,
      },
      // Dynamic robots redirect
      {
        source: '/robots.txt',
        destination: '/api/robots',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/seo-data',
        destination: '/api/seo',
      },
      {
        source: '/site-metadata',
        destination: '/api/metadata',
      },
    ]
  },  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
}

export default nextConfig
