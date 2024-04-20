const { NextAuthOptions } = require('next-auth');
const NextAuth = require('next-auth/next');
const GoogleProvider = require('next-auth/providers/google').default;


// const User = require('../../../models/userModel');
import User from '@/app/models/userModel';
const { connect } = require('@/app/dbConfig/dbConfig');

// connect();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const authOption = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/auth?prompt=consent&response_type=code&scope=email%20profile%20openid%20https://www.googleapis.com/auth/user.phonenumbers.read&access_type=offline&state=state",
    }),
  ],
  callbacks: {
    async session({session}){
      const sessionUser= await User.findOne({email:session.user.email});
      console.log(session);
      return session;
    },
    async signIn({ signIn, profile, signOut}) {
      console.log('Google Profile:', profile);
      try{
        await connect();
        console.log('true man ');
        const userExist=await User.findOne({email:profile.email});
        
        if (!userExist) {
          
            const user=await User.create({
              email:profile.email,
              username:profile.name,
              phone:'32482442',
              password:'ewfwefe',

            })
            return "/"; 
        }
          } catch (error) {
            console.error('Error saving new user:', error);
          }
          return true;
        

      
     
  
    },
  },
};

const handler = NextAuth.default(authOption);

// Export the handler for both GET and POST requests
module.exports = { GET: handler, POST: handler };
