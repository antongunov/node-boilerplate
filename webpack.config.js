'use strict';

const resolve = require('path').resolve;
const fs = require('fs');
const webpack = require('webpack');

const context = resolve('server/pages/assets/js/');

let entries = (dir) => {
    let chunks = {};
    fs.readdirSync(dir).filter((file) => {
        if (/\.js$/.test(file)) {
            let name = file.slice(0, '.js'.length);
            chunks[name] = `./${file}`;
        }
    });
    return chunks;
};

module.exports = {
    context: context,
    entry: entries(context),
    output: {
        filename: '[name].js',
        path: resolve('build/assets/js/')
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [ context ],
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
