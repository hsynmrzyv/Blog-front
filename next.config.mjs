/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogpf201-api.onrender.com",
      },
    ],
  },
};

export default nextConfig;
