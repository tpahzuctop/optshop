import  webpack from "webpack-stream";


export const javascript = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "JS",
                message: "Error: <% error.message %>"
            }))
        )

        .pipe(webpack({
            mode: 'development',
            entry:  {
                site: '/src/js/theme-site.js',
                shop: '/src/js/theme-shop.js',
                blog: '/src/js/theme-blog.js',
            },

            output: {
                filename: '[name].min.js',
            }
        }))

        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
}