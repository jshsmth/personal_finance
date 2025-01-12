import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      beige: {
        100: "#F8F4F0",
        500: "#98908B",
      },
      grey: {
        100: "#F2F2F2",
        300: "#B3B3B3",
        500: "#696868",
        900: '#201F24'
      },
      secondary: {
        green: '#277C78',
        yellow: '#F2CDAC',
        cyan: '#82C9D7',
        navy: '#626070',
        red: '#C94736',
        purple: '#826CB0',
      },
      other: {
        purple: '#AF81BA',
        turquoise: '#597C7C',
        brown: '#93674F',
        magenta: '#934F6F',
        blue: '#3F82B2',
        navyGrey: '#97A0AC',
        armyGreen: '#7F9161',
        gold: '#CAB361',
        orange: '#BE6C49',
      },
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: [
          "Public Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        'preset-1': ['32px', { lineHeight: '120%', letterSpacing: '0px' }],
        'preset-2': ['20px', { lineHeight: '120%', letterSpacing: '0px' }],
        'preset-3': ['16px', { lineHeight: '150%', letterSpacing: '0px' }],
        'preset-4': ['14px', { lineHeight: '150%', letterSpacing: '0px' }],
        'preset-5': ['12px', { lineHeight: '150%', letterSpacing: '0px' }],
      },
    },
  },
  plugins: [],
} satisfies Config;
