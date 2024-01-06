/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        primary: "#FF6606",
        secondary: "#FFBC9B",
        dark: "#8e1b14",
        bg: {
          DEFAULT: "#ffffff",
          dark: "#908858"
        },
        gray: {
          DEFAULT: "#7c7c7c"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
