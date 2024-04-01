import type { Config } from "tailwindcss";

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
      colors: {
        'off-white': '#F7F7F7',
        'contextual-pink': '#F2A9C7',
        'dark-gray': '#595959',
        'text-gray': '#8F8F8F',
      },
    },
    fontFamily: {
      'utopia-std': ['var(--font-utopia-std)'],
      'space-grotesk': ['var(--font-space-grotesk)'],
    },
  },
  plugins: [],
};
export default config;
