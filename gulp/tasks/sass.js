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

/**
 * Gulp tasks
 */

gulp.task('sass', () => {
    return gulp.src('server/pages/assets/sass/app.scss')
        .pipe(sass())
        .pipe(postcss([ normalize(), autoprefixer ]))
        .pipe(gulp.dest('build/static/css/'));
});
