const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

mergeConfig(nextConfig, userConfig);

export default nextConfig;
