/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const package = require('./package.json')

const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  output: 'standalone',
  env: {
    APP_VERSION: package.version,
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    /* use as template string only */
    /* to avoid error Array of strings received invalid values (, ) */
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
  },
}

const nextPlugins = [[withBundleAnalyzer]]

module.exports = withPlugins(nextPlugins, nextConfig)
