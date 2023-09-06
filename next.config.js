/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "imgs.search.brave.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
