import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    TwitterProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_ID_SECRET,
      version: "2.0",
      authorization: {
        url: "https://twitter.com/i/oauth2/authorize",
        params: { scope: "users.read tweet.read tweet.write offline.access" },
      },
      protection: "pkce",
    }),
  ],
  secret: "rg6Q7dY0cr+aah0TAeznUQLaxjcjc+6o5GVZ2jYIM4g=",
})