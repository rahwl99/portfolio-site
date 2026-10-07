import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows testing on local network if needed in development
  allowedDevOrigins: ["192.168.1.3"],
};

export default nextConfig;
