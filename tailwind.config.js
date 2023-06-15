/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fe6f1d",

          "secondary": "#f4c7dc",

          "accent": "#df5897",

          "neutral": "#14171F",

          "base-100": "#0a161a",

          "info": "#6286DF",

          "success": "#2FE490",

          "warning": "#9D6D0B",

          "error": "#E71834",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

