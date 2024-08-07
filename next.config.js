/** @type {import('next').NextConfig} */
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: 'sw.ts',
  swDest: 'public/sw.js',
  register: false,
});

const nextConfig = {
  output: 'standalone',
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default withSerwist(nextConfig);
