import type { Config } from "tailwindcss";

type utilityAdderFn = (config:{[key:string]:{[key:string]:string|{[key:string]:string}}}) => void
interface iUtilityAdder { 
  addUtilities: utilityAdderFn
}



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // custom extension for infinite scroller
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite", 
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"}
        }
      }


    },
  },
  plugins: [
    function(util:iUtilityAdder){
      util.addUtilities({
        ".animation-play-state-running": {
          "animation-play-state": "running" 
        },
        ".animation-play-state-paused": {
          "animation-play-state": "paused"
        } 
      });
    },
   
  ],
};
export default config;
