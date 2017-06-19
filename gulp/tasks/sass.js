'use strict';

const gulp = require('gulp');

/**
 * Gulp plugins
 */

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

/**
 * PostCSS plugins
 */

const autoprefixer = require('autoprefixer');
const normalize = require('postcss-normalize');
const fontMagician = require('postcss-font-magician');

/**
 * Gulp tasks
 */

gulp.task('sass', () => {
    return gulp.src('server/pages/assets/sass/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([
            normalize(),
            fontMagician({
                hosted: [ 'server/pages/assets/fonts/' ]
            }),
            autoprefixer({
                cascade: false
            })
        ]))
        .pipe(gulp.dest('build/assets/css/'));
});
