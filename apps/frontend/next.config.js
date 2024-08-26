/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ["localhost", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/***",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
