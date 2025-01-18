const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true, // (optional)
};

export default nextConfig;
