/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  outputFileTracingExcludes: {
    '*': ['node_modules/**/*'],
  },
  // Other config options can go here
}

module.exports = nextConfig