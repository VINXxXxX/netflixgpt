// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include your JSX/TSX files for Tailwind CSS to analyze
  ],
  theme: {
    extend: {
      scrollbar: ['rounded'],
    }, // Extend Tailwind CSS with custom styles if needed
  },
  variants: {
    extend: {}, // Extend or override Tailwind CSS variants
  },
  plugins: [
    // Add Tailwind CSS plugins here, if any
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file structure
    ],
  },
};
