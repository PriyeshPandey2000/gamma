// pages/api/initiatePayment.js

import axios from 'axios';
import { NextResponse } from 'next';

export  async function POST(req, res) {
  if (req.method === 'POST') {
    try {
      // You can access request data from the frontend in req.body
      const { courseId } = req.body;

      // Make a request to your existing payment route
      const response = await axios.post('https://www.gammaprep.in/api/users/payment', {
        courseId: courseId,
        // Add any other required data for the payment route
      });

      // Send the response received from the payment route back to the frontend
      return NextResponse.json(response.data);
    } catch (error) {
      console.error('Error initiating payment:', error);
      res.status(500).json({ error: 'An error occurred while initiating the payment.' });
    }
  } else {
    return NextResponse.status(405).json({ error: 'Method Not Allowed' });
  }
}
