// Include gulp
var gulp = require('gulp');

// Polyfill so we don't need >= node 0.12
require('es6-promise').polyfill();

// Include plugins
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

// Turn sass into css, prefix, minify
gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer({
    //   browsers: ['last 4 version'],
    //   cascade: false
    // }))
    // .pipe(minifyCSS())
    .pipe(gulp.dest('css/'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['scss']);
});

// Default task (recompile on init before watching)
gulp.task('default', ['watch']);
