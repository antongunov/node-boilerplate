'use strict';

const gulp = require('gulp');

/**
 * Gulp tasks
 */

gulp.task('watch', (done) => {
    gulp.watch([ 'server/pages/*.pug', 'server/pages/assets/pug/**/*.pug' ], gulp.series('pug'));
    gulp.watch('server/pages/*.!(pug)', gulp.series('static'));
    gulp.watch('server/pages/assets/sass/**/*.scss', gulp.series('sass'));
    return done();
});
