/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      '*': ['node_modules/**/*'],
    },
  },
  // Other config options can go here
}

module.exports = nextConfig