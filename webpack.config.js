'use strict';

const resolve = require('path').resolve;

const jsDir = resolve('server/pages/assets/js/');

module.exports = {
    entry: {
        app: `${jsDir}/app.js`
    },
    output: {
        filename: '[name].js',
        path: resolve('build/assets/js/')
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [ jsDir ],
            use: [{
                loader: 'babel-loader'
            }]
        }]
    }
};
