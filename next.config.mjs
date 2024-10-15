/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://happy-wook-kim.github.io/Resume";

const nextConfig = {
    output: 'export',
    basePath: !debug ? '/Resume' : "",
    images: {
        unoptimized: true,
    },
    // assetPrefix:
    //     process.env.NODE_ENV === "production"
    //         ? repository
    //         : "",
};

export default nextConfig;
