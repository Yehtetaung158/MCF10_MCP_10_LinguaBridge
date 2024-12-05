/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "Padauk", "sans-serif"],
    },
    extend: {
      fontFamily: {
        header_font_style: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-color": "#17A2B8", // Orange color
        "primary-hover-color": "#24737f",
        "secondary-color": "#F3FDFF", 
        "light-yellow": "#FEF6E0",
        "dark-yellow": "#F7C32E",
        "light-green": "#DAFFEB",
        "dark-green": "#09B850",
        "light-purple": "#F0ECF9",
        "dark-purple": "#8F6FD8",
        "light-blue": "#E9EDFF",
        "dark-blue": "#445ED6",
        "dark-orange": "#FF6636",

        // Additional Colors
        gray: {
          DEFAULT: "#6B7280",
        },
        green: {
          900: "#14532D",
          800: "#15803D",
          700: "#166534",
          600: "#16A34A",
          500: "#22C55E",
          400: "#4ADE80",
          300: "#86EFAC",
          200: "#BBF7D0",
          100: "#DCFCE7",
          50: "#F0FDF4",
        },
        neutral: {
          900: "#0A0A0A",
          800: "#171717",
          700: "#262626",
          600: "#404040",
          500: "#525252",
          400: "#737373",
          300: "#A3A3A3",
          200: "#D4D4D4",
          100: "#E5E5E5",
          50: "#F5F5F5",
          DEFAULT: "#FAFAFA",
        },
      },
      fontSize: {

        "pl_font_size": "18px",
        "pm_font_size": "16px",
        "ps_font_size": "14px",
        "sm_font_size": "12px",

        pl_font_size: "18px",
        pm_font_size: "16px",
        ps_font_size: "14px",

      },
      fontWeight: {
        header_weight: "700",
        miniHeader_weight: "600",
        heighLight_weight: "500",
      },
      transitionProperty: {
        "transform-opacity": "transform, opacity",
      },
    },
  },
  plugins: [],
};
