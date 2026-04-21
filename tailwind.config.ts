import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        forest: "#1F3D36",      // Primary deep forest green
        cream: "#F7F5F0",       // Secondary warm cream background
        sage: "#A3B5A0",        // Accent muted sage
        charcoal: "#2B2B2B",    // Dark text
        gold: "#C6A969",        // Soft gold accent
        sand: "#E8E6DF",        // Optional secondary neutral
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Libre Baskerville", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.75rem, 5.5vw, 4.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "hero": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "h1": ["clamp(2rem, 3.5vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h2": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2" }],
      },
      maxWidth: {
        "reading": "42rem",
        "content": "72rem",
      },
      letterSpacing: {
        "eyebrow": "0.18em",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(31, 61, 54, 0.04), 0 8px 24px rgba(31, 61, 54, 0.06)",
        "card": "0 1px 3px rgba(31, 61, 54, 0.05), 0 12px 32px rgba(31, 61, 54, 0.05)",
      },
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
