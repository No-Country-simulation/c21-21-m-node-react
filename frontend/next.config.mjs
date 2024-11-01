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
            {
                protocol: 'https',
                hostname: 'boostup-api.onrender.com', 
                port: '', 
                pathname: '/uploads/**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/user/login', 
                destination: 'https://boostup-api.onrender.com/user/profile',
            },
            {
                source: '/api/user/auth/register',
                destination: 'https://boostup-api.onrender.com/user/auth/register',
            },
            {
                source: '/api/create-project',
                destination: 'https://boostup-api.onrender.com/projects/createProject', 
            },
            {
                source: '/api/update-project/:id', 
                destination: 'https://boostup-api.onrender.com/projects/updateProject/:id', 
            },
            {
                source: '/api/projects',
                destination: 'https://boostup-api.onrender.com/projects/getProjects', 
            },
            {
                source: '/api/users',
                destination: 'https://boostup-api.onrender.com/user/allUsers', 
            },
            {
                source: '/api/project-detail/:id',
                destination: 'https://boostup-api.onrender.com/projects/getProject/:id', 
            },
            {
                source: '/api/delete-project/:id',
                destination: 'https://boostup-api.onrender.com/projects/delete-project/:id', 
            },
        ];
    },
}

export default nextConfig;

