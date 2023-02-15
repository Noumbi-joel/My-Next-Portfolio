/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "www.zoho.com"],
  },
};

module.exports = nextConfig;
