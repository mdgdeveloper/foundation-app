module.exports = {
    plugins: {
        "postcss-nesting": true,
        "autoprefixer": true,
        "postcss-purgecss": {
            content: ["src/**/*.html"],
            css: ["src/**/*.css"]
          }
    }
}