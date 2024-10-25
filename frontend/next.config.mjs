/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/uploads/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/user/login', 
                destination: 'http://localhost:4000/user/profile', // depende de donde este levantado
            },
            {
                source: '/api/user/auth/register',
                destination: 'http://localhost:4000/user/auth/register', //depende de donde este levantado
            },
            {
                source: '/api/create-project',
                destination: 'http://localhost:4000/projects/createProject', 
            },
            {
                source: '/api/update-project/:id', 
                destination: 'http://localhost:4000/projects/updateProject/:id', 
            },
        ];
    },
};
  
export default nextConfig;
