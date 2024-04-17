// pages/api/makePayment.js
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import sha256 from "crypto-js/sha256";
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';



export async function POST(request) {
  try {
    // const headers = {
    //   'Access-Control-Allow-Origin': 'https://mercury.phonepe.com',
    //   'Access-Control-Allow-Methods': 'POST',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // };
    
    // const request = await request.json();
    const courseId=request.body.courseId;
    const  course  = request.body.course;

        console.log('Received courseId:', courseId);
        console.log('Received course:', course);

    // const course = JSON.parse(Cookies.get('course'));
    // console.log(course);

    // if (!selectedCourse) {
    //   console.error('Selected course not found in stored courses');
    //   return NextResponse.error({ status: 404, message: 'Selected course not found' });
    // }
    const transactionid = "Tr-"+uuidv4().toString(36).slice(-6);
    // const courseId = "6611c028467c3ba9ab016961";

    // This line assumes you have a `courses` array defined somewhere.
    // You need to replace `courses` with your actual array of courses.
    // const course = courses.find(course => course._id === courseId);
    // if (!course) {
    //   console.error('Course not found');
    //   return NextResponse.error({ status: 404, message: 'Course not found' });
    // }

    // Construct payload for PhonePe API
    const payload = {
      merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
      merchantTransactionId: `Tr-${uuidv4().toString(36).slice(-6)}`,
      merchantUserId: `MUID-${uuidv4().toString(36).slice(-6)}`,
      amount: 100,
      redirectUrl: `https://www.gammaprep.in/api/users/status/${transactionid}?courseId=${courseId}`,
      redirectMode: "POST",
      callbackUrl: `https://www.gammaprep.in/api/users/status/${transactionid}?courseId=${courseId}`,
      mobileNumber: '9999999999',
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const dataPayload = JSON.stringify(payload);
    const dataBase64 = Buffer.from(dataPayload).toString("base64");

    const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
    const dataSha256 = sha256(fullURL);
    const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;

    const prodURL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

    // Make request to PhonePe API
    const response = await axios.post(
      prodURL,
      { request: dataBase64 },
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-VERIFY": checksum,
          "Access-Control-Allow-Origin": "https://www.gammaprep.in",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "X-Requested-With,content-type,x-app-id, x-auth-token, id-mercury",
          
        },
      }
    );
    const redirect=response.data.data.instrumentResponse.redirectInfo.url;
      console.log(redirect);

    // Redirect to PhonePe payment page
    return NextResponse.redirect(redirect);
  } catch (error) {
    console.error('Error making payment:', error);
    return NextResponse.error({ status: 500, message: 'An error occurred while processing the payment.' });
  }
}
