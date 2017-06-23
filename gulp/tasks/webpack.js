'use strict';

const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../../webpack.config');

let compiler = webpack(config);

let handler = (done) => {
    return (err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
        } else {
            console.log(stats.toString({
                colors: true
            }));
        }
        return done();
    }
};

/**
 * Gulp tasks
 */

gulp.task('webpack:run', (done) => {
    compiler.run(handler(done));
});

gulp.task('webpack:watch', (done) => {
    compiler.watch({
        aggregateTimeout: 100,
        poll: 1000
    }, handler(done));
});
