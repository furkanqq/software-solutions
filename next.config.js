/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['lodash', 'axios']
  },
  images: {
    domains: ['cdn.jsdelivr.net', 'raw.githubusercontent.com', 'picsum.photos', 'gw.balancenetwork.io'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'en',
    localeDetection: false
  },
  async rewrites() {
    return [
      {
        source: '/iletisim',
        destination: '/contact'
      },
      {
        source: '/hakkimizda',
        destination: '/about'
      },
      {
        source: '/kariyer',
        destination: '/career'
      },
      {
        source: '/ekibimiz',
        destination: '/team'
      },
      {
        source: '/hizmetler',
        destination: '/services'
      },
      {
        source: '/projeler',
        destination: '/projects'
      },
      {
        source: '/hizmet/:slug',
        destination: '/services/:slug', 
      },
      {
        source: '/proje/:slug',
        destination: '/projects/:slug', 
      },
    ];
  }
};

module.exports = nextConfig;
