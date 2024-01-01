/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
