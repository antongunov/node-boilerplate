'use strict';

const gulp = require('gulp');
const conf = require('../config.json');

gulp.task('watch', (done) => {
    gulp.watch(conf.pages.from, gulp.series('pug'));
    gulp.watch(conf.static.from, gulp.series('static'));
    return done();
});
