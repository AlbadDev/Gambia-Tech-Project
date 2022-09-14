/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    /* config options here */
  
        images: {
            domains: ["gambiatechproject.org"],
        }
}

module.exports = nextConfig
