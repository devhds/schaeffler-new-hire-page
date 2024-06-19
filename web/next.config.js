/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
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
        ]
    },
}

module.exports = nextConfig
