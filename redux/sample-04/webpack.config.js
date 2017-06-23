'use strict';

let path = require('path');
let webpack = require('webpack');

// Add needed plugins here
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor:[
            'react',
            'react-dom'
        ],
        app: ['./src/index']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin(
            'vendor',
            'vendor.js'
        ),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '/dist/index.html'),
            template: path.join(__dirname, '/src/index.html'),
            minify: {
                minifyJS: true,
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true
            }
        })
    ]
};
