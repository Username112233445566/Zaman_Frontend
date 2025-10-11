/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn3d.iconscout.com'],
    // Или используй remotePatterns для более гибкой настройки:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn3d.iconscout.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig