/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        domains: ['storage.googleapis.com', 'fakestoreapi.in'],
      },
};

export default nextConfig;
