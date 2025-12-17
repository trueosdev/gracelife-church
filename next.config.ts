import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude canvas and other Node.js modules from client bundle
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        stream: false,
        crypto: false,
        util: false,
        buffer: false,
        process: false,
        os: false,
        net: false,
        tls: false,
      };
      
      // Ignore pdfjs-dist worker files during bundling
      config.module.rules.push({
        test: /pdf\.worker\.(min\.)?js/,
        type: "asset/resource",
        generator: {
          filename: "static/worker/[hash][ext][query]",
        },
      });
      
      // Handle pdfjs-dist module resolution
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
      };
      
      // Ignore warnings from pdfjs-dist
      config.ignoreWarnings = [
        ...(config.ignoreWarnings || []),
        { module: /node_modules\/pdfjs-dist/ },
      ];
    }
    return config;
  },
};

export default nextConfig;
