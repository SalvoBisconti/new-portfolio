/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        menu: {
          0: {
            top: "35px",
            left: "35px",
            width: "0px",
            height: "0px",
            borderRadius: "50%",
          },
          "99%": {
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200vh",
            borderRadius: "50%",
          },
          "100%": {
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            borderRadius: "0",
          },
        },
      },
      animation: {
        showMenu: "menu 0.45s linear 3  ",
      },
    },
  },
  plugins: [],
};
