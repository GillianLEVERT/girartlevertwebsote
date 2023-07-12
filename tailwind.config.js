/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero' :"url('./assets/bg.png')"
      }
    }
    ,
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B74F6F",
          secondary: "#4472CA",
          accent: "#012ec1",
          neutral: "#272934",
          "base-100": "#303036",
          info: "#69a4e8",
          success: "#22d383",
          warning: "#b36f0f",
          error: "#ed4a31",
        },
      },
    ],
  },
};
