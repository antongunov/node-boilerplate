'use strict';

const gulp = require('gulp');

gulp.task('static', () => {
    return gulp.src('server/pages/*.!(pug)', { since: gulp.lastRun('static') })
        .pipe(gulp.dest('build/'));
});
