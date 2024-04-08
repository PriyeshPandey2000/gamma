export const isLoggedOut = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const authToken = localStorage.getItem('token');
      return authToken === null; // Return true if the token doesn't exist, indicating the user is logged out
    }
    return true; // Return true if localStorage is not available (for server-side rendering)
  };
  