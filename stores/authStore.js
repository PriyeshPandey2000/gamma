import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: typeof window !== 'undefined' ? (() => {
    try {
      // Retrieve isLoggedIn from localStorage if available, default to false otherwise
      return !!JSON.parse(localStorage.getItem('isLoggedIn'));
    } catch (error) {
      console.error('localStorage is not available:', error);
      return false;
    }
  })() : false,
  login: () => {
    set({ isLoggedIn: true });
    if (typeof window !== 'undefined') {
      try {
        // Update localStorage when isLoggedIn changes
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  },
  logout: () => {
    set({ isLoggedIn: false });
    if (typeof window !== 'undefined') {
      try {
        // Update localStorage when isLoggedIn changes
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      }
    }
  },
}));

export default useAuthStore;
