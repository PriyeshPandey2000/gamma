
import { NextRequest, NextResponse } from 'next/server';
import sha256 from "crypto-js/sha256";
import axios from "axios";


export async function POST(req, res) {
  
  
  const data = await req.formData();
  console.log(data);
  const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");
  

  

  const st =
    `/pg/v1/status/${merchantId}/${transactionId}` +
    process.env.NEXT_PUBLIC_SALT_KEY;
  // console.log(st)
  const dataSha256 = sha256(st);

  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
  console.log(checksum);




  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  
    const response = await axios.request(options);
    console.log("Payment status:", response.data.code);

    if (response.data.code === "PAYMENT_SUCCESS") {
      // Handle payment success
      // For example, update the database or log the payment success
      // Then redirect to the success page
      return NextResponse.redirect("https://gamma-indol.vercel.app/success/Success", {
        status: 301,
      });
    } else {
      // Handle payment failure
      // For example, log the payment failure or show an error message
      // Then redirect to the failure page
      return NextResponse.redirect("https://gamma-indol.vercel.app/failure/Failure", {
        status: 301,
      });
    }
  }
  //  catch (error) {
  //   console.error("Error checking payment status:", error);
  //   // If there's an error, redirect to the failure page
  //   return NextResponse.redirect("https://gamma-indol.vercel.app/failure/Failure", {
  //     status: 301,
  //   });
  //  }

  // CHECK PAYMENT STATUS
  // const response = await axios.request(options);
  // console.log("r===", response.data.code);


  // if (response.data.code == "PAYMENT_SUCCESS"){
    
    
    
  //   try {
  //     const { courseId } = req.params;
  // console.log("yo");
  // console.log(courseId);
  //     const backendResponse = await axios.post('http://localhost:3000/api/users/addcourse', {
  //       userId: '6613deef44519fae0b46e6d8',
  //       courseId: courseId,
  //       paymentStatus:'PAYMENT_SUCCESS'
  //     });

  //     console.log("Backend response:", backendResponse.data);

//       return NextResponse.redirect("https://gamma-indol.vercel.app/success/Success", {
//         status: 301,
//       });
//     } catch (error) {
//       console.error("Error making POST request to backend:", error);
//       return NextResponse.redirect("https://gamma-indol.vercel.app/failure/Failure", {
//         status: 301,
//       });
//     }
// }
// else return NextResponse.redirect("https://gamma-indol.vercel.app/failure/Failure",{
//   // a 301 status is required to redirect from a POST to a GET route
//   status: 301,
// });


