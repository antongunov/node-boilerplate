'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'js',
        'pug',
        'sass'
    )
));
