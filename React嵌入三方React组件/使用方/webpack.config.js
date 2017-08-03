'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        "index": "./examples/index"
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'scripts/[name].js',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
}