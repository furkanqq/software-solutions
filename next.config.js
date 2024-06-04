/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        destination: '/contact',
        source: '/iletisim'
      },
      {
        source: '/hakkimizda',
        destination: '/about'
      },
      {
        destination: '/career',
        source: '/kariyer'
      },
      {
        destination: '/team',
        source: '/ekibimiz'
      },
      {
        destination: '/services',
        source: '/hizmetler'
      },
      {
        destination: '/projects',
        source: '/projeler'
      },
      {
        destination: '/services/:slug',
        source: '/hizmetler/:slug'
      },
      {
        destination: '/projects/:slug',
        source: '/projeler/:slug'
      }
    ];
  },
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'raw.githubusercontent.com',
      'picsum.photos',
      'gw.balancenetwork.io'
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    contentDispositionType: 'attachment',
    dangerouslyAllowSVG: true
  },
  i18n: {
    localeDetection: false,
    locales: ['tr', 'en'],
    defaultLocale: 'en'
  },
  experimental: {
    optimizePackageImports: ['lodash', 'axios']
  },
  swcMinify: true
};

module.exports = nextConfig;
