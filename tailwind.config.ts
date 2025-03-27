import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        orbitron: ["Orbitron", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        pressStart2P: ["pressStart2P", "sans-seric"]
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",  // Small shadow
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",  // Medium shadow
        lg: "3px 3px 6px rgba(0, 0, 0, 0.6)",  // Large shadow
        xl: "4px 4px 8px rgba(0, 0, 0, 0.7)",  // Extra large shadow
        glow: "0 0 8px rgba(255, 255, 255, 0.8)", // Glow effect
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
} satisfies Config;
