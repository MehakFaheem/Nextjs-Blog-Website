/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Remove this after fixing all type errors
  },
}

module.exports = nextConfig