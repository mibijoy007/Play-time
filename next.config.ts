import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // domains: [
    //   'https://www.play-time.es', // Example domain
    //   'placehold.co',
    //   ],
      dangerouslyAllowSVG: true,
  },
}

export default nextConfig;
