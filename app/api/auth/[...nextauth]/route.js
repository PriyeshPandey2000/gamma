const { NextAuthOptions } = require('next-auth');
const NextAuth = require('next-auth/next');
const GoogleProvider = require('next-auth/providers/google').default;
import axios from 'axios';
import { cookies } from 'next/headers'


// const User = require('../../../models/userModel');
import User from '@/app/models/userModel';
const { connect } = require('@/app/dbConfig/dbConfig');

connect();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const NEXTAUTH_URL=process.env.NEXTAUTH_URL;

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
    // async session({session}){
    //   const sessionUser= await User.findOne({email:session.user.email});
    //   console.log(session);
    //   return session;
    // },
    async signIn({ signIn, profile, signOut,url}) {
      console.log('Google Profile:', profile);
      try{
        await connect();
        console.log('true man ');
        const userExist=await User.findOne({email:profile.email});
        
        if (!userExist) {
          
            const user={
              email:profile.email,
              username:profile.name,
              phone:'00000',
              password:'google',

            }
            const response=await axios.post(`${NEXTAUTH_URL}/api/users/signup`, user);
            console.log("Signup success", response.data);
            // toast.success("Signup successful");
            const loginResponse = await axios.post(`${NEXTAUTH_URL}/api/users/login`, {
              email: profile.email,
              password: 'google', // Temporary password for Google sign-in
            });

            

            return '/'; 
        }else {
          // User already exists, send email and password to login route
          const loginResponse = await axios.post(`${NEXTAUTH_URL}/api/users/login`, {
            email: profile.email,
            password: 'google', // Temporary password for Google sign-in
          });
          return '/';
        }
          } catch (error) {
            console.error('Error saving new user:', error);
            return { error: 'Custom error message' };
          
          
         }
  },
  // async signOut({ url, redirect }) {
  //   try {
  //     await axios.post(`${NEXTAUTH_URL}/api/users/logout`); // Your logout API route
  //     return redirect('/'); // Redirect to home page after logout
  //   } catch (error) {
  //     console.error('Error during sign-out:', error);
  //     return { error: 'Custom error message' };
  //   }
  async signOut({ url, redirect }) {
    try {
      await signOut({ callbackUrl: '/' });
      cookies().delete('token'); // Sign out using NextAuth's signOut function
      return redirect('/'); // Redirect to home page after logout
    } catch (error) {
      console.error('Error during sign-out:', error);
      return { error: 'Custom error message' };
    }
  },
},
};

const handler = NextAuth.default(authOption);

// Export the handler for both GET and POST requests
module.exports = { GET: handler, POST: handler };
