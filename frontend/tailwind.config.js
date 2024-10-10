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
                customGreen: '#8BC34A', 
                customBlue: '#0D47A1',
                customLightgray: '#F1F1F1',
                customNavyBlue: '#263238',
            },
        },
    },
    plugins: [],
}
