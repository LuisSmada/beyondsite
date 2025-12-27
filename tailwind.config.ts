// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   // tailwind.config.js (extrait)
// theme: {
//   extend: {
//     colors: {
//       brand: {
//         900: "#0C343D",
//         700: "#14505C",
//         500: "#1E6B78",
//         200: "#BFD3D7",
//         100: "#DDEAEC",
//       },
//       accent: {
//         500: "#F9BF4B",
//         200: "#FDE6B6",
//         100: "#FFF2D6",
//       },
//       ui: {
//         bg: "#FAFAF8",
//         surface: "#FFFFFF",
//         surface2: "#F3F6F6",
//         border: "#E5ECEC",
//         borderStrong: "#C9D6D8",
//         text: "#0C343D",
//         textMuted: "#3E5E65",
//         textSubtle: "#6B8287",
//       }
//     },
//     boxShadow: {
//       sm: "0 1px 2px rgba(12,52,61,.08)",
//       md: "0 10px 30px rgba(12,52,61,.12)",
//     }
//   }
// }
// ,
//   plugins: [],
// }

module.exports = {
  purge: [],
  darkMode: false,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
