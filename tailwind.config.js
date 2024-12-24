/** @type {import(tailwindcss).Config} */
module.exports = {
  
  content: ["./src/**/*.{html,ts}", "node_modules/preline/dist/*.js"],
  theme: {
    
    extend: {
      colors: {
        primaryColor: "#4A2A04",
        secondaryColor: "#d0b588",
        carbon: "#333333",
        cInactive:'#cccfcc',
        tsecondary: "#334155",
      },
      
    },
    
  },
  plugins: [require("preline/plugin")],
};
