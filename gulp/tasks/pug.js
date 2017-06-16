'use strict';

const gulp = require('gulp');
const PluginError = require('gulp-util').PluginError;

/**
 * Gulp plugins
 */

const pug = require('gulp-pug');

/**
 * Log errors nicely
 */

pug.logError = (end) => {
    return (err) => {
        const message = new PluginError('pug', err.message).toString();
        process.stderr.write(`${message}\n`);
        return end();
    };
};

/**
 * Gulp tasks
 */

gulp.task('pug', (done) => {
    return gulp.src('server/pages/*.pug')
        .pipe(pug({
            data: {
                env: process.env
            }
        }))
        .on('error', pug.logError(done))
        .pipe(gulp.dest('build/'));
});
