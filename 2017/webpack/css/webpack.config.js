var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "/"),
    output: {
        path: path.join(__dirname, "../dist/css"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css', {
                    publicPath: '../'
                })
            },
            {
                test: /\.(sass|scss)/,
                loader: ExtractTextPlugin.extract(["css", 'sass'], {
                    publicPath: path.join(__dirname, "../dist/css")
                })
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};