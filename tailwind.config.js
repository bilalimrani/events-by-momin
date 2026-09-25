/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#f5f5f5",
          100: "#e8e8e8",
          200: "#c8c8c8",
          300: "#999999",
          400: "#666666",
          500: "#444444",
          600: "#2a2a2a",
          700: "#1a1a1a",
          800: "#111111",
          900: "#0a0a0a",
          950: "#050505",
        },
        gold: {
          50: "#fdf9ec",
          100: "#faf0c9",
          200: "#f3dd8e",
          300: "#ecc754",
          400: "#e3b12e",
          500: "#c9a227",
          600: "#a97e1e",
          700: "#875e1c",
          800: "#704b1d",
          900: "#5f3f1d",
        },
        cream: {
          50: "#fffdfb",
          100: "#141414",
          200: "#1e1e1e",
        },
        charcoal: "#d4d0cc",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(6deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,162,39,0.55)" },
          "50%": { boxShadow: "0 0 0 14px rgba(201,162,39,0)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite linear",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        pulseGlow: "pulseGlow 2.2s infinite",
        spinSlow: "spinSlow 22s linear infinite",
        gradientMove: "gradientMove 8s ease infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
    },
  },
  plugins: [],
};
