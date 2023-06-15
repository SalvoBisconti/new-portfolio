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
      // keyframes: {
      //   blinker: {
      //     "0%": {
      //       borderRightColor: "red",
      //     },
      //     "100%": {
      //       borderRightColor: "trasparent",
      //     },
      //   },
      //   typewriter: {
      //     "0%": {
      //       width: "0",
      //     },
      //     "100%": {
      //       width: "180px",
      //     },
      //   },
      // },
      // animation: {
      //   blinkerOn: "blinker 2s steps(44) 1s 1 normal both ",
      //   typewriting: "typewriter 700ms infinite ",
      // },
    },
  },
  plugins: [],
};
