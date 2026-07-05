/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand navy (#1a2744) with a supporting scale
        navy: {
          50: '#f4f6fb',
          100: '#e7ebf4',
          200: '#c9d3e6',
          300: '#9caecd',
          400: '#6982ab',
          500: '#46608c',
          600: '#314a72',
          700: '#243a5b',
          800: '#1f2e49',
          900: '#1a2744', // brand primary
          950: '#11192e',
        },
        // Accent blue (#2563eb)
        accent: {
          light: '#3b82f6',
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        },
        canvas: '#f9fafb', // page background
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)',
        'card-hover': '0 10px 30px -12px rgba(26, 39, 68, 0.25)',
        navy: '0 20px 50px -20px rgba(26, 39, 68, 0.45)',
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
        'fly-across': {
          '0%': { left: '-8%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { left: '100%', opacity: '0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'fly-across': 'fly-across 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
