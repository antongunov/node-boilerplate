'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('static', () => {
    return gulp.src('server/pages/*.!(pug)', { since: gulp.lastRun('static') })
        .pipe(gulp.dest('build/'));
});
