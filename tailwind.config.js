/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'arcathoria-default': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/src/assets/background.png')",
            },
            fontFamily: {
                magic: ['Cinzel Decorative', 'serif'],
                body: ['Merriweather', 'serif'],
            },
            colors: {
                'arcane-purple': {
                    DEFAULT: '#6B21A8',
                    100: '#EADFF5',
                    200: '#D0BEEA',
                    300: '#B69EDF',
                    400: '#9D7FD4',
                    500: '#854FCC',
                    600: '#6B21A8',
                    700: '#58178E',
                    800: '#451075',
                    900: '#320A5B',
                },
                'arcane-purple-500': '#6B21A8',
                'mystic-blue': '#1E3A8A',
                'golden-glow': '#FFD700',
                'dark-shadow': '#0F172A',
                'turquoise-magic': '#0BC5EA',
                'illusion-pink': '#FF69B4',
                'fire-red': '#B91C1C',
                'ice-blue': '#3B82F6',
            },
        },
    },
    plugins: [],
}

