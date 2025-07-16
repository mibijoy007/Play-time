import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};
module.exports = {
  images: {
    domains: [
      'https://www.play-time.es', // Example domain
      'placehold.co',
      ],
      dangerouslyAllowSVG: true,
  },
}

export default nextConfig;
