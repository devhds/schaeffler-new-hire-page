/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            { source: '/', destination: '/hire-page/', permanent: true }, // a permanent redirect
        ]
    },
}

module.exports = nextConfig
