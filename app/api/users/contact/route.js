// pages/api/phone-number.js

import User from '@/app/models/userModel';
import { getSession } from 'next-auth/react'; // Import getSession from next-auth/react
import { connect } from '@/app/dbConfig/dbConfig';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
  try {
    const session = await getSession(); // Get session data
    const reqBody = await request.json();
    const { phoneNumber } = reqBody;
    console.log(phoneNumber);
    console.log(session);
    if (!session?.user?.email) {
      // If email is not available in session, return error
      return NextResponse.json({ message: 'User email not found' }, { status: 400 });
    }
    conole.log(session.user.email);
    console.log(sdgsdfgs);

    

    await connect();
    const user = await User.findOneAndUpdate(
      { email: session.user.email }, // Use session user's email
      { phone: phoneNumber },
      { new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error('Error updating phone number:', error);
    return NextResponse.json({ message: 'Error updating phone number' }, { status: 500 });
  }
}
