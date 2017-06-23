'use strict';

const gulp = require('gulp');

/**
 * Gulp plugins
 */

const pug = require('gulp-pug');
const {log, colors} = require('gulp-util');

/**
 * Log errors nicely
 */

pug.logError = (end) => {
    return (err) => {

        const module = colors.blue('pug');
        const template = colors.magenta(err.filename.slice(process.cwd().length));
        const status = colors.red.bold('[failed]');

        log(`[${module}] compile pug template ${template} ${status}`);
        console.error(colors.red(err.message));

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
