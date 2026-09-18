/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lora", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        accent: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      boxShadow: {
        floating: "0 10px 30px -10px rgba(15, 23, 42, 0.35)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};
