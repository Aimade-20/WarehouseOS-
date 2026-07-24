import connectDb from "@/lib/mongodb";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/model/register";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;
        if (!email || !password) {
          return null;
        }
        await connectDb();
        const user = await User.findOne({
          email,
        });
        if (!user) {
          return null;
        }
        const storedPassword =
          (user.password as string) || (user.Password as string);
        if (!storedPassword) {
          return null;
        }
        const isPasswordValid = await bcrypt.compare(password, storedPassword);
        if (!isPasswordValid) {
          return null;
        }

        if (!user.password && user.Password) {
          await User.updateOne(
            { _id: user._id },
            { password: user.Password, $unset: { Password: "" } },
          );
        }

        return {
          id: user._id.toString(),
          name: user.fullname,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
