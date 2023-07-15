/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg' :"url('./assets/bg.png')"
      }
    }
    ,
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A40C0C",
          secondary: "#000000",
          accent: "#012ec1",
          neutral: "#272934",
          "base-100": "#A6A6A6",
          info: "#69a4e8",
          success: "#22d383",
          warning: "#b36f0f",
          error: "#ed4a31",
        },
      },
    ],
  },
};
