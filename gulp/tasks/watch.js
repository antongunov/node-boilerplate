'use strict';

const gulp = require('gulp');

gulp.task('watch', (done) => {
    gulp.watch('server/pages/*.pug', gulp.series('pug'));
    gulp.watch('server/pages/*.!(pug)', gulp.series('static'));
    return done();
});
