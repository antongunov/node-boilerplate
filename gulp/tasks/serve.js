'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * Gulp tasks
 */

gulp.task('serve:reload', (done) => {
    browserSync.reload();
    return done();
});

gulp.task('serve', (done) => {

    browserSync.init({
        server: {
            baseDir: 'build/'
        },
        open: false,
        notify: false,
        logFileChanges: false
    }, () => {
        return done();
    });

    gulp.watch('build/**/*', gulp.series('serve:reload'));
});
