/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
        './nuxt.config.ts',
        './node_modules/flowbite/**/*.js'
    ],

    theme: {
        extend: {
            fontFamily: {
                biosans: ['"Bio Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite')],
}
