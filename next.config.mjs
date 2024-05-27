/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["trrtcfmyoxmdvhszaqps.supabase.co"],
  },
};

export default nextConfig;
