import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {},
    callbacks: {
        async jwt({ token, user, account }) {
            if (account) {
                token.accessToken = account.access_token; 
            }
            return token;
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken; 
        return session;
        },
    },
    debug: true, // Activa el modo debug
});

export { handler as GET, handler as POST };
