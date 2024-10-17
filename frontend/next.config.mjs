/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/user/login', // Ruta que los usuarios verán
                destination: 'http://localhost:3001/user/profile', // URL local a la que deseas redirigir
            },
            {
                source: '/api/user/auth/register',
                destination: 'http://localhost:3001/user/auth/register',
            },
        ];
    },
};

export default nextConfig;