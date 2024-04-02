/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.builder.io'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
  };
  

export default nextConfig;
