import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/app/lib/prismadb"
import NextAuth from "next-auth";
export const authOptions : AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers:[
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password)
          throw new Error("Please Fill in the fields");
        const user = await prisma.user.findUnique({
          where: 
          { 
            email: credentials.email 
          },
        });
        if (!user || !user.hashedPassword)
          throw new Error("Invalid credentials");

        const isValid = await  bcrypt.compare(credentials.password, user.hashedPassword);
        if (!isValid) throw new Error("Invalid credentials");

        return user
      },
    }),

  ],
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,


}

export default NextAuth (authOptions)

