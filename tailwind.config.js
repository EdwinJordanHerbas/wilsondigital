/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#fff0f6",100:"#ffd6e7",200:"#ffa3c7",300:"#ff75ad",400:"#f14f96",
          500:"#cc2a73",600:"#a21f5a",700:"#7c1746",800:"#591132",900:"#3b0b22",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['Inter', "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem" },
      maxWidth: { wrap: "1200px", prose: "60ch" },
    },
  },
  plugins: [],
};
