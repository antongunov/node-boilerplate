'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('server/pages/assets/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/static/css/'));
});
