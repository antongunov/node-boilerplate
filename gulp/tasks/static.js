'use strict';

const gulp = require('gulp');
const path = require('path');
const conf = require('../config.json');

gulp.task('static', () => {

    const srcOpts = {
        since: gulp.lastRun('static')
    };

    return gulp.src(conf.static.from, srcOpts)
        .pipe(gulp.dest(path.join(conf.build.rootDir, conf.static.to)));
});
