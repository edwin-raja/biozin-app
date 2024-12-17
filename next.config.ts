

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/biobiz-app/' : '',
  basePath: isProd ? '/biobiz-app' : '',
  output: 'export'
};

export default nextConfig;