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

/**
 * Gulp tasks
 */

gulp.task('sass', () => {
    return gulp.src('server/pages/assets/sass/app.scss')
        .pipe(sass())
        .pipe(postcss([ autoprefixer ]))
        .pipe(gulp.dest('build/static/css/'));
});
