import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins} from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { reset } from "./gulp/tasks/reset.js";
import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svg_icons } from "./gulp/tasks/svgicons.js";
import { webasystSiteCss, webasystSiteJs, webasystShopJs, webasystBlogJs, webasystSiteFonts} from "./gulp/tasks/webasyst.js";

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const svgicons = gulp.series(svg_icons);
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const js = gulp.series(javascript);
const css = gulp.series(scss);


const mainTasks = gulp.parallel(copy, html, scss, javascript, images);
const dev = gulp.series(reset, fonts, mainTasks, svgicons, gulp.parallel(watcher, server));
const wa = gulp.series(reset, mainTasks, webasystSiteCss, webasystSiteJs, webasystShopJs, webasystBlogJs, webasystSiteFonts, svgicons);

gulp.task('default', dev);
gulp.task('svgicons', svgicons);
gulp.task('fonts', fonts);
gulp.task('js', js);
gulp.task('css', css);
gulp.task('wa', wa);