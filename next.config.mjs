/** @type {import('next').NextConfig} */
const nextConfig = {
    // env НЕ нужен для клиентских переменных с NEXT_PUBLIC_ префиксом
    // Они автоматически доступны через process.env.NEXT_PUBLIC_*

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

export default nextConfig;