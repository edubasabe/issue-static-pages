const { watch, series, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const notify = require('gulp-notify');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

function defaultTask(callback) {
  callback();
}

function browser_sync(done) {
  browserSync.init({
    // server: './mocks/',
    proxy: 'https://issue-number-one.myshopify.com/',
    watch: true,
    snippetOptions: {
      rule: {
        // match: /<head[^>]*>/i,
        match: /<\/body>/i,
        fn: function(snippet, match) {
            return match + snippet;
        }
      }
    },
    reloadDelay: 1500,
    // files: '*/*.*',
    serveStatic: ['.','./mocks/css'],
  });
  done();
}

function watch_files() {
  // watch('./mocks/*.html', browserSync.reload);
  watch('*/*.+(html|liquid|scss|tmp)',  browserSync.reload)
  // src('*/*.liquid').pipe(notify({ message: 'Gulp is watching, Happy coding! 💻' }))
  // watch('./mocks/scss/**/*.scss', series(sassTranspile(), browserSync.reload));
}
// function css(done) {
//   src('./mocks/scss/**/*.scss')
//     .pipe(sourcemaps.init())
//     .pipe(sass(sassOptions).on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(sourcemaps.write())
//     .pipe(dest('./mocks/css'))
//     .pipe(rename('main.scss.liquid'))
//     .pipe(dest('./assets/'))
//     .pipe(browserSync.stream())
//   done();
// }

function css() {
  return src('./mocks/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(rename('main.scss.liquid'))
    .pipe(dest('./assets/'))
    .pipe(rename('main.scss.liquid' + '%3f607'))
    .pipe(dest('./override-local/cdn.shopify.com/s/files/1/1059/4068/t/2/assets/'))
    // .pipe(browserSync.reload({ stream: true }));
}

function reloadBrowser(cb) {
  browserSync.reload;
  cb();
}

// exports.serve = series(browser_sync, css, watch_files);
// exports.css = css;
// exports.watch = series(watch_files, browser_sync);
exports.serve = browser_sync;
exports.default = function() {
  // All events will be watched
  watch('./mocks/scss/**/*.scss', series(css))
};



exports.watch = series(browser_sync, css, watch_files);