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
        filename: '/[name].js',
        publicPath: ''
    },
    devtool: 'cheap-module-source-map',
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
        new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
        }),
        /*new webpack.HotModuleReplacementPlugin(),*/
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new HtmlWebpackPlugin({
            filename:"index.ejs",
            template: path.join(__dirname, '/src/index.ejs'),
            minify: {
                minifyJS: true,
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true
            },
            placeHolderHTML:"<%-html%>",
            stateStore:"<%-state%>"
        })
    ]
};
