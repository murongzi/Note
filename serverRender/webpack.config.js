'use strict';

let path = require('path');
let webpack = require('webpack');

// Add needed plugins here
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devServer:{
        contentBase:'./src',
        historyApiFallback:true,
        hot:true,
        inline:true,
        port:9999,
        noInfo:false
    },
    entry: {
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
            loader: "babel-loader",
            include: [
                path.join(__dirname, '/src')
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.ejs'),
        })
    ]
};
