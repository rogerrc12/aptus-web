/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/tecuida",
  images: {
    loader: "imgix",
    path: "/",
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;
