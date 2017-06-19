'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('js', () => {
    return gulp.src('server/pages/assets/js/app.js')
        .pipe(gulp.dest('build/assets/js/'));
});
