/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://happy-wook-kim.github.io/Resume";

const nextConfig = {
    output: 'export',
    basePath: '/your-repo-name',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
