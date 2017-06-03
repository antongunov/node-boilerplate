'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', () => {
    return gulp.src('server/pages/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'));
});
