'use strict';

const gulp = require('gulp');

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel(
        'static',
        'pug',
        'sass'
    ),
    'watch'
));
