/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      DEFAULT: "0px 4px 15px 0px #00000026",
    },
    extend: {
      backgroundImage: {
        think: "url('./assets/images/2_think.svg')",
        gradient: "url('./assets/images/gradient.png')",
      },
      width: {
        "100vw": "100vw",
      },
      height: {
        "100vh": "100vh",
      },
      fontSize: {
        12: ["12px", "16px"],
        14: "14px",
        16: ["16px", "20px"],
        20: ["20px", "150%"],
        24: ["24px", "32px"],
        30: ["30px", "120%"],
        32: ["32px", "150%"],
        48: ["48px", "100%"],
      },
    },
  },
  plugins: [],
};
