/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@astrouxds/react', '@astrouxds/astro-web-components'],
};

module.exports = nextConfig;
