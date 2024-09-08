/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: [
      "localhost",
      "avatars.githubusercontent.com",
      "127.0.0.1",
      "placehold.co",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/***",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/***",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
