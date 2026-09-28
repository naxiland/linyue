/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        // 极简白（衬线文人风）：全站宋体化，缺失时逐级回退
        sans: ["Noto Serif SC", "LXGW WenKai", "Songti SC", "STSong", "SimSun", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
