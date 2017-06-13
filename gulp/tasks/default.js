'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('default', gulp.series(
    'build',
    gulp.parallel(
        'watch',
        'browser-sync:start'
    )
));
