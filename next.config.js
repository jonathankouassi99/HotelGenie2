/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/website-builder",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/website-builder",
        permanent: true, // This makes the redirect permanent; change to false if it should be temporary
      },
    ];
  },
};

module.exports = nextConfig;
