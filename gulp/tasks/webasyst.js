export const webasystSiteCss = () => {
    return app.gulp.src(app.path.src.webasyst_site_css)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_css))
}

export const webasystSiteJs = () => {
    return app.gulp.src(app.path.src.webasyst_site_js)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_js))
}

export const webasystShopJs = () => {
    return app.gulp.src(app.path.src.webasyst_shop_js)
        .pipe(app.gulp.dest(app.path.build.webasyst_shop_js))
}

export const webasystBlogJs = () => {
    return app.gulp.src(app.path.src.webasyst_blog_js)
        .pipe(app.gulp.dest(app.path.build.webasyst_blog_js))
}


export const webasystSiteFonts = () => {
    return app.gulp.src(app.path.src.fonts)
        .pipe(app.gulp.dest(app.path.build.webasyst_site_fonts))
}