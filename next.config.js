/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',  // Allows all paths from Unsplash
            },
        ],
    },
}

module.exports = nextConfig
