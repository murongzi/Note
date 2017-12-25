const path = require('path');

const srcPathAbsolute = path.join(__dirname, '../src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        app:'./src/index.ts'
    },
    output:{
        path: path.join(__dirname, '../dist'),
        publicPath:'',
        filename: 'js/[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: srcPathAbsolute,
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 8081,
      disableHostCheck: true
    },
    resolve:{
        extensions:['.ts', '.js', '.scss', '.html', '.ejs']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loaders:['awesome-typescript-loader?inlineSourceMap=true&sourceMap=false', 'angular2-template-loader', '@angularclass/hmr-loader'],
                exclude:[/node_module\//]
            },
            {
                test:/\.html$/,
                loader:'raw-loader',
                exclude:[/node_module\//]
            }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
          name: ['vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
          template: './src/index.ejs',
          inject: 'body',
          minify: {
            collapseWhitespace: true,
            conservativeCollapse: true
          }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}