// // contexts/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios'; 
// import { useRouter } from 'next/router';

// const AuthContext = createContext({
//     isLoggedIn: false,
//     login: () => {},
//     logout: () => {}
//   });

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const router = useRouter();

//   const login = async (email, password) => {
//     try {
//       // Make an HTTP POST request to the /api/login route with the email and password
//       const response = await axios.post('/api/users/login', { email, password });

//       // Check if login was successful based on the response
//       if (response.data.success) {
//         setIsLoggedIn(true);
//       } else {
//         // Handle login failure (show error message, redirect, etc.)
//         console.error('Login failed:', response.data.error);
//       }
//     } catch (error) {
//       // Handle any errors that occur during the login process
//       console.error('Error logging in:', error.message);
//     }
//   };

//   const logout = async () => {
//     try {
//       // Make an HTTP GET request to the /api/logout route
//       const response = await axios.get('/api/users/logout');
  
//       // Check if logout was successful based on the response
//       if (response.data.success) {
//         setIsLoggedIn(false); // Set isLoggedIn to false
//       } else {
//         // Handle logout failure (show error message, redirect, etc.)
//         console.error('Logout failed:', response.data.error);
//       }
//     } catch (error) {
//       // Handle any errors that occur during the logout process
//       console.error('Error logging out:', error.message);
//     }
//   };


//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
