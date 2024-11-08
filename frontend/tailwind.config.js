/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customGreen: '#3FB284',
                customGray: '#3C3F42',
                customWhite: '#FDFDFD',
                customBlack: '#1B1A1E',
            },
            fontSize: {
                customH1: 'clamp(1.75rem, 1.75rem + 0.25 * (100vw - 23.4375rem) / 66.5625, 2rem)',
            },
        },
    },
    plugins: [],
}
