'use strict';

const gulp = require('gulp');

/**
 * Gulp plugins
 */

const pug = require('gulp-pug');

/**
 * Gulp tasks
 */

gulp.task('pug', () => {
    return gulp.src('server/pages/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/'));
});
