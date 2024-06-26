/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com'
            },
        ],
    },
};

export default nextConfig;
