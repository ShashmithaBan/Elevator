/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include .jsx and .tsx for React and TypeScript
    "./src/Component/**/*.{html,js,jsx,ts,tsx}" // Same here for your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}