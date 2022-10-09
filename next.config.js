/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['miro.medium.com'],
  },
  staticPageGenerationTimeout: 100,
}

module.exports = nextConfig
