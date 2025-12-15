/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // أي ملفات JSX أو TSX داخل src
    ],
    theme: {
        extend: {
            fontFamily: {
                mosvita: ["Mosvita", "sans-serif"], // هنا اسم الخط زي ما حطيته في @font-face
            },
        },
    },
    plugins: [],
};
