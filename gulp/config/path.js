import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        fonts: `${srcFolder}/fonts`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        webasyst_site_css: `${srcFolder}/webasyst/site/themes/optshop/css/`,
        webasyst_site_js: `${srcFolder}/webasyst/site/themes/optshop/js/`,
        webasyst_shop_js: `${srcFolder}/webasyst/shop/themes/optshop/js/`,
        webasyst_blog_js: `${srcFolder}/webasyst/blog/themes/optshop/js/`,
        webasyst_site_fonts: `${srcFolder}/webasyst/site/themes/optshop/fonts/`,
    },
    src: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/*.js`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/**/*.*`,
        svgicons: `${srcFolder}/img/svgicons/*.svg`,
        fonts: `${srcFolder}/fonts/**/*.*`,
        webasyst_site_js: `${buildFolder}/js/site.min.js`,
        webasyst_shop_js: `${buildFolder}/js/shop.min.js`,
        webasyst_blog_js: `${buildFolder}/js/blog.min.js`,
        webasyst_site_css: `${buildFolder}/css/**/*.*`,
        webasyst_blog: `${srcFolder}/webasyst/blog/**/*.*`,
        webasyst_shop: `${srcFolder}/webasyst/shop/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}