import axios from 'axios';
import { NextResponse } from 'next';
import { makePayment } from '../payment/route';

export async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      // Make a request to your existing payment route
      const response = await makePayment();

      // Send the response received from the payment route back to the frontend
      return NextResponse.json(response.data);
    } catch (error) {
      console.error('Error initiating payment:', error);
      return NextResponse.json({ error: 'An error occurred while initiating the payment.' });
    }
  } else {
    return NextResponse.status(405).json({ error: 'Method Not Allowed' });
  }
}
