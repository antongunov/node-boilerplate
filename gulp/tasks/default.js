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
        'webpack'
    )
));

gulp.task('default:development', gulp.series(
    'clean',
    gulp.parallel(
        'copy:assets',
        'pug',
        'sass',
        'webpack'
    ),
    gulp.parallel(
        'watch',
        'browser-sync:start'
    )
));

gulp.task('default', gulp.series(
    `default:${process.env.NODE_ENV}`
));
