/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lodash', 'axios']
  },
  images: {
    domains: ['cdn.jsdelivr.net', 'raw.githubusercontent.com', 'picsum.photos'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

module.exports = nextConfig;