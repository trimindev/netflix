/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["**"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://www.youtube.com/watch",
      },
      {
        protocol: "https",
        hostname: "https://rr2---sn-npoe7nz7.c.drive.google.com/videoplayback",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
