/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://happy-wook-kim.github.io/Resume";

const nextConfig = {
    output: 'export',
    basePath: '/Resume',
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    // assetPrefix: !debug ? repository : "", // production 일때 prefix 경로
    // trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

export default nextConfig;
