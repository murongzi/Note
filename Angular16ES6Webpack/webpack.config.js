let path = require('path')
let webpack = require('webpack')

let HtmlWebpackPlugin = require('html-webpack-plugin')

let ExtractTextPlugin = require("extract-text-webpack-plugin")

let rootPath = path.join(__dirname, './src')

module.exports = {
    entry: {
        vendor: [
            'angular',
            'angular-ui-router'
        ],
        app: path.join(rootPath, './index.js')
    },
    entry: path.join(rootPath, './index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'scripts/[name].[hash:16].js',
        chunkFilename: 'scripts/[name].[hash:16].js'
    },
    devServer: {
        contentBase: rootPath,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 8082,
        noInfo: false
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel', exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.(sass|scss)/,
                loader: ExtractTextPlugin.extract(['css', 'sass'], {
                    publicPath: '../'
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin('styles/app.[hash:16].css'),
        new ExtractTextPlugin('styles/app.css'),
        new webpack.optimize.CommonsChunkPlugin(
            'vendor',
            'scripts/vendor.[hash:16].js'
        ),
        new HtmlWebpackPlugin({
            template: path.join(rootPath, './index.html'),
            inject: 'head',
            minify: {
                removeComments: true,
                removeScriptTypeAttributes: true
            }
        })
    ]
}