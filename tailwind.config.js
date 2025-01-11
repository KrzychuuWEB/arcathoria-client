/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Cinzel Decorative', 'serif'],
                body: ['Roboto', 'sans-serif'],
                tooltip: ['Open Sans', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#6A0DAD',
                    300: '#9B59B6',
                    600: '#4A007A',
                },
                secondary: {
                    DEFAULT: '#FFD700',
                    300: '#FFE680',
                    600: '#B89500',
                },
                complementary: {
                    blue: {
                        DEFAULT: '#0A74DA',
                        300: '#1A8FE3',
                        600: '#0645B1',
                    },
                    red: {
                        DEFAULT: '#FF4C4C',
                        300: '#FF6B6B',
                        600: '#E02A2A',
                    },
                    green: {
                        DEFAULT: '#4CAF50',
                        300: '#66BB6A',
                        600: '#388E3C',
                    },
                },
                text: {
                    light: '#F2F2F2',
                    secondary: '#B0B0B0',
                    highlight: '#FFD700',
                },
            },
        },
    },
    plugins: [],
}

