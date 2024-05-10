import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const config =  {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
};

export default withBundleAnalyzer(config)({
  enabled: process.env.ANALYZE === 'true',
});
