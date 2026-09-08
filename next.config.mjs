import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cuando uses imágenes remotas (CDN, storage), agrégalas aquí:
    // remotePatterns: [{ protocol: 'https', hostname: 'tu-cdn.com' }],
  },
};

export default withNextIntl(nextConfig);
