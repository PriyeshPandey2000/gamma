// const { session } = require('@/lib/session');
// const { NextAuthOptions } = require('next-auth');
// const NextAuth = require('next-auth/next');
// const GoogleProvider = require('next-auth/providers/google');
// const User = require('./path/to/your/user/model');

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// const authOption = {
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     GoogleProvider({
//       clientId: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile, isNewUser }) {
//       if (isNewUser) {
//         const newUser = new User({
//           email: profile.email,
//           name: profile.name,
//           googleId: profile.id, // Store Google ID in the user record
//         });
//         await newUser.save();
//       }
//       return true;
//     },
//     session,
//     async jwt({ token, user, account, profile }) {
//       if (profile) {
//         const existingUser = await User.findOne({ email: profile.email });
//         if (!existingUser) {
//           throw new Error('No user found');
//         }
//         token.id = existingUser._id;
//       }
//       return token;
//     },
//   },
// };

// const handler = NextAuth(authOption);
// module.exports = { GET: handler, POST: handler };
