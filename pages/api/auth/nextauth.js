import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.username === "admin" && credentials.password === "securepassword") {
          return { id: 1, name: "Admin" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
};

export default NextAuth(authOptions);
