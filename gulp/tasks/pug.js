'use strict';

const gulp = require('gulp');

/**
 * Gulp plugins
 */

const pug = require('gulp-pug');

/**
 * Gulp tasks
 */

gulp.task('pug', (done) => {
    return gulp.src('server/pages/*.pug')
        .pipe(pug({
            data: {
                env: process.env
            }
        }))
        .on('error', (err) => {
            console.error(err.message);
            return done();
        })
        .pipe(gulp.dest('build/'));
});
