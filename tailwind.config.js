/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        apaleo: {
          "primary": "#1e40af",      // Apaleo blue
          "secondary": "#06b6d4",    // Cyan
          "accent": "#3b82f6",       // Light blue
          "neutral": "#1f2937",      // Dark gray
          "base-100": "#ffffff",     // White
          "base-200": "#f9fafb",     // Light gray
          "base-300": "#f3f4f6",     // Lighter gray
          "info": "#0ea5e9",         // Sky blue
          "success": "#10b981",      // Green
          "warning": "#f59e0b",      // Amber
          "error": "#ef4444",        // Red
        },
      },
      "light",
      "dark",
      "corporate",
      "cupcake",
    ],
  },
} 