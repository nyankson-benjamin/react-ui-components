module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "ui-", // Adds a prefix to all Tailwind classes (e.g., `ui-bg-blue-500`)

  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideIn: "slideIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
