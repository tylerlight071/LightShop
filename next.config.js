/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com"], // Allow images from plus.unsplash.com
    // You can add more domains as needed
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
