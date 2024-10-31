/** @type {import(tailwindcss).Config} */
module.exports = {
  
  content: ["./src/**/*.{html,ts}", "node_modules/preline/dist/*.js"],
  theme: {
    
    extend: {
      colors: {
        primaryColor: "#4A2A04",
        secondaryColor: "#d0b588",
        carbon: "#333333",
        silver: "#a6a6a6",
        danger: "#F45A4F",
        black: "black",
        warning: "orange",
        info: "#60A5FA",
        link: "#4560CB",
        tsecondary: "#334155",
      },
    },
    
  },
  plugins: [require("preline/plugin")],
};
