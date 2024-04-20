// // pages/contact.js
// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios'; // Import Axios for making HTTP requests
// import { useSession,signIn,signOut } from 'next-auth/react';
// import SessionProvider from '@/components/Provider';
// import Provider from '@/components/Provider';

// export default function Contact() {
//   const router = useRouter();
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const {data:session}=useSession();
//   console.log(session);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to the backend API to update user's phone number
//       await axios.post('/api/users/contact', { phoneNumber }, {
//         withCredentials: true // Include credentials (cookies) in the request
//       });
//       // Redirect user to some other page after updating
//       router.push('/');
//     } catch (error) {
//       console.error('Error updating phone number:', error);
//       // Handle error gracefully, show error message to the user, etc.
//     }
//   };

//   return (
    
//     <div>
//       <h1>Contact Page</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <button type="submit">Update Phone Number</button>
//       </form>
//     </div>

//   );
// }
