const gulp = require('gulp');
const fs = require('fs');
const render = require('mustache').render;

const nginxDir = 'config/nginx';

/**
 * Gulp tasks
 */

gulp.task('nginx:conf', (done) => {
  fs.readFile(`${nginxDir}/server.nginx.mustache`, 'utf-8', (err, template) => {
    if (err) return done(err);
    const nginxConf = render(template, process.env);
    return fs.writeFile(`${nginxDir}/server.nginx`, nginxConf, err => done(err));
  });
});
