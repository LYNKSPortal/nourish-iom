/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#D95E25',
        'warm-cream': '#FBF2E0',
        'deep-green': '#025336',
        'charcoal': '#202020',
      },
      fontFamily: {
        'bolota': ['Bolota', 'serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
      },
      maxWidth: {
        'container': '1350px',
      },
    },
  },
  plugins: [],
}
