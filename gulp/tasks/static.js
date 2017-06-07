'use strict';

const gulp = require('gulp');

gulp.task('static', () => {

    const srcOpts = {
        since: gulp.lastRun('static')
    };

    return gulp.src('server/pages/*.!(pug)', srcOpts)
        .pipe(gulp.dest('build/'));
});
