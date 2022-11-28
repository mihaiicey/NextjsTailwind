module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/calltoaction.webp')",
       }),
      colors:{
        lumor: '#fecc04'
          
      }
    },
  },
  darkMode: `class`,
};
