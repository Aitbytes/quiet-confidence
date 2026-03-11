/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D3436",
        accent: "#6C5CE7",
        surface: "#F8F9FA",
        "text-main": "#2D3436",
        "text-muted": "#636E72",
        success: "#00B894",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ['"Source Sans Pro"', "system-ui", "sans-serif"],
      },
    },
  },
};
