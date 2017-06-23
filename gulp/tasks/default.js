'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('default:production', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'pug',
        'sass',
        'webpack:run'
    )
));

gulp.task('default:development', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'pug',
        'sass',
        'webpack:watch'
    ),
    gulp.parallel(
        'watch',
        'browser-sync:init'
    )
));

gulp.task('default', gulp.series(
    `default:${process.env.NODE_ENV}`
));
