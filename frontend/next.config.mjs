/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dummyimage.com'],
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
                source: '/api/projects',
                destination: 'http://localhost:4000/projects/getProjects', 
            },
        ];
    },
};
  
export default nextConfig;
