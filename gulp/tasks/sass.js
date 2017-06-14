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

gulp.task('sass', (done) => {
    return gulp.src('server/pages/assets/sass/app.scss')
        .pipe(sass())
        .on('error', (err) => {
            console.error(err.message);
            return done();
        })
        .pipe(postcss([ normalize(), autoprefixer({ cascade: false }) ]))
        .pipe(gulp.dest('build/static/css/'));
});
