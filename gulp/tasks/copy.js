'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('copy:root', () => {
    return gulp.src('server/pages/*.!(pug)', { since: gulp.lastRun('copy:root') })
        .pipe(gulp.dest('build/'));
});

gulp.task('copy', gulp.parallel(
    'copy:root'
));
