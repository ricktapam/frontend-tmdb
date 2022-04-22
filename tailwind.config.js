module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "dui-",
    darkTheme: "dark",
  },
};
