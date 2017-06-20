'use strict';

const gulp = require('gulp');
const PluginError = require('gulp-util').PluginError;

/**
 * Gulp plugins
 */

const babel = require("gulp-babel");

/**
 * Log errors nicely
 */

babel.logError = (end) => {
    return (err) => {
        const message = new PluginError('babel', err).toString();
        process.stderr.write(`${message}\n`);
        return end();
    };
};

/**
 * Gulp tasks
 */

gulp.task('js', (done) => {
    return gulp.src('server/pages/assets/js/app.js')
        .pipe(babel())
        .on('error', babel.logError(done))
        .pipe(gulp.dest('build/assets/js/'));
});
