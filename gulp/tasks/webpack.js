'use strict';

const gulp = require('gulp');
const webpack = require('webpack');

const wpConfig = require('../../webpack.config');

gulp.task('webpack', (done) => {
    webpack(wpConfig, (err, stats) => {
         console.log(stats.toString({
             colors: true
         }));
        return done();
    });
});
