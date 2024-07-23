/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/de-de',
                permanent: true,
            },
            {
                source: '/:locale/assets/:path*',
                destination: '/assets/:path*',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
