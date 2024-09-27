import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import mongoose from "mongoose"
import User from '@/app/models/User'


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("User: " + JSON.stringify(user, null, 2));
      // console.log("Account: " + JSON.stringify(account, null, 2));
      // console.log("Profile: " + JSON.stringify(profile, null, 2));
      // console.log(email);

      const client = await mongoose.connect('mongodb://localhost:27017/chai')
      const currentUser = await User.findOne({ email: user.email })
      if (!currentUser) {
        const newUser = new User({
          email: user.email,
          name: user.name,
          profile: user.image,
          username: user.email.split("@")[0]
        })
        await newUser.save()
      }
      return true
    },
    async session({ session, token, user }) {
      const client = await mongoose.connect('mongodb://localhost:27017/chai')
      const currentUser = await User.findOne({ email: session.user.email })
      session.user.username = currentUser.username
      session.user.mongo_id = currentUser._id
      session.user.image = currentUser.profile
      return session
    }
  }
})

export { handler as GET, handler as POST }
