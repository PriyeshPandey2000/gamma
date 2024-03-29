/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '300px',
        'sm': '640px',   // Small screens, like mobile
        'md': '768px',   // Medium screens, like tablets
        'lg': '1024px',  // Large screens, like laptops
        'xl': '1280px',  // Extra large screens, like desktops
        '2xl': '1536px', // Larger desktop screens
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': '#0B4B7F',
        'custom-gray': 'linear-gradient(99.28deg, #FFFFFF 2.04%, #F2F4FB 149.73%)',
        "x-0b-4b-7f": "var(--x-0b-4b-7f)",
      },
    },
  },
  plugins: [],
};
