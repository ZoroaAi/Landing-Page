import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { getUserByEmail, createUser, getAdminByEmail, createAdmin } from "@/lib/airtable";

const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          console.info("Authorize function triggered", credentials);
          const { email, password } = credentials;
          let user = await getAdminByEmail(email) || await getUserByEmail(email);

          if (!user) {
            console.error("User Not Found", { email });
            return null;
          }

          const isPasswordValid = await bcrypt.compare(password, user.Password);
          if (!isPasswordValid) {
            console.error("Invalid Password", { email });
            return null;
          }

          console.info("User authenticated successfully", { email, role: user.Role });
          return { id: user.id, email: user.Email, role: user.Role || "user" };
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    }
  },
  pages: {
    signIn: '/portal',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };