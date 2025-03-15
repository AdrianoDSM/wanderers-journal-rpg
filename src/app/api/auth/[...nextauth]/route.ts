import { prisma } from "@/lib/db";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                });
                if (!user) throw new Error('User not found');

                const isValid = await compare(credentials?.password || '', user.password)
                if (!isValid) throw new Error('Invalid password');

                return { 
                    id: user.id, 
                    username: user.username, 
                    email: user.email 
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = {
                id: token.id as string,
                username: token.username as string,
                email: token.email as string,
            };
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };