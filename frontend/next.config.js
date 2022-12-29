/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    urlImports: [
      'https://framer.com/m/',
      'https://framerusercontent.com/',
      'https://ga.jspm.io/',
      'https://jspm.dev/',
      
    ],
  },
};

module.exports = nextConfig
