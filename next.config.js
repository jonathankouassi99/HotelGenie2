/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/website",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/website",
        permanent: true, // This makes the redirect permanent; change to false if it should be temporary
      },
    ];
  },
};

module.exports = nextConfig;
