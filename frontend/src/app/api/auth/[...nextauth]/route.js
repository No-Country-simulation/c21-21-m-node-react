import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
<<<<<<< HEAD
  pages: {}, //se puede definir rutas personalizadas como la de login acá
  debug: true, // Activa el modo debug
=======
  secret: process.env.NEXTAUTH_SECRET,
  pages: {},
  debug: true,
>>>>>>> dc92a92a0371ff50ad7a7e3d9901d19a208bd7b6
});

export { handler as GET, handler as POST };
