'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const path = require('path');
const conf = require('../config.json');

gulp.task('pug', () => {
    return gulp.src(conf.pages.from)
        .pipe(pug())
        .pipe(gulp.dest(path.join(conf.build.rootDir, conf.pages.to)));
});
