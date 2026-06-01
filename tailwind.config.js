/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a2e',
          muted: '#4a4a6a',
          faint: '#8888aa',
        },
        paper: {
          DEFAULT: '#f5f0e8',
          dark: '#e8e0d0',
        },
        mode: {
          flight: '#2563eb',
          'flight-intl': '#1d4ed8',
          train: '#16a34a',
          'night-train': '#7c3aed',
          bus: '#d97706',
        },
      },
    },
  },
  plugins: [],
}
