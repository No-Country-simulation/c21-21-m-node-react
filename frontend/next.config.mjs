/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/user/login",
        destination: "http://localhost:4000/user/profile",
      },
      {
        source: "/api/user/auth/register",
        destination: "http://localhost:4000/user/auth/register",
      },
    ];
  },
};

export default nextConfig;
