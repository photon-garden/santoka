/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dev_and_build_server/src/**/*.{html,rs,css}',
    './browser/src/**/*.{html,rs,css}',
    './shared/src/**/*.{html,rs,css}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
