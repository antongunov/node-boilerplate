'use strict';

const gulp = require('gulp');
const path = require('path');
const rimraf = require('rimraf');
const conf = require('../config.json');

gulp.task('clean', (done) => {

    const from = path.join(conf.build.rootDir, '/*');
    const cwd = process.cwd();
    const absFrom = path.join(cwd, from);

    if (path.relative(from, absFrom)) {
        return done(new Error(`Cleaning outside the project directory '${cwd}' is not allowed`));
    } else {
        return rimraf(absFrom, done);
    }
});
