/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    ...Array.from({ length: 12 }).map((_, i) => `grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }).map((_, i) => `sm:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }).map((_, i) => `md:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }).map((_, i) => `lg:grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }).map((_, i) => `xl:grid-cols-${i + 1}`),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
