const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + 'assets/js/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        })
    ]
}
