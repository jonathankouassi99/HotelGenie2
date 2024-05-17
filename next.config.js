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
        permanent: true, // Change to false if it should be temporary
      },
      {
        source: "/website-builder",
        destination: "/website",
        permanent: true, // Change to false if it should be temporary
      },
    ];
  },
};

module.exports = nextConfig;
