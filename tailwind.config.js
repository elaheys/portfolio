/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design palette (Inbio-style): coral accent, deep-navy ink, soft light ground.
        accent: {
          DEFAULT: "#FA5757",
          soft: "#FFEDED",
          hover: "#E84A4A",
        },
        ink: {
          DEFAULT: "#0D0D0D", // headings
          soft: "#21243D", // strong body
          muted: "#565872", // secondary text
          faint: "#8A8FA3", // captions / meta
        },
        ground: {
          DEFAULT: "#FCFCFF", // page background
          card: "#FFFFFF", // card surface
          tint: "#F4F4FB", // alternating tint
        },
        line: "#ECECF3",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1180px",
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(33, 36, 61, 0.25)",
        "card-hover": "0 28px 55px -22px rgba(250, 87, 87, 0.35)",
      },
      borderRadius: {
        xl2: "20px",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
