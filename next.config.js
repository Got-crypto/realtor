/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"]
  },
  env: {
    NEXT_PUBLIC_BAYUT_API_KEY: process.env.NEXT_PUBLIC_BAYUT_API_KEY
  }
}

module.exports = nextConfig
