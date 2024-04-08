export const isLoggedIn = (request) => {
    // Check if window and localStorage are defined (client-side context)
    if (typeof window !== 'undefined' && window.localStorage) {
      // Check if the authentication token exists in localStorage
      const authToken = localStorage.getItem('token');
      // Return true if the token exists and is not empty
      return authToken !== null && authToken !== '';
    } else if (request) {
      // Check if the request object is provided (server-side context)
      const token = request.cookies.get('token')?.value || '';
      // Return true if the token exists and is not empty
      return token !== '';
    }
    // Return false if neither localStorage nor cookies contain the token
    return false;
  };
  