module.exports = {
    mode: "jit",
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "blue-twitter": "rgb(29, 155, 240)",
            },
        },
    },
    plugins: [],
};
