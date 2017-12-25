const path = require('path');

const srcPathAbsolute = path.join(__dirname, '../src');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'src/index.ts'
    },
    output:{
        path: path.join(__dirname, '../dist'),
        publicPath:'',
        filename: 'js/[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    devtool: 'eval',
    devServer: {
      contentBase: srcPathAbsolute,
      historyApiFallback: true,
      hot: true,
      inline: true,
      port: 9100,
      // host: 'localhost'
      disableHostCheck: true
    },
    resolve:{
        extensions:['.ts', '.js', '.scss', '.html', '.ejs']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loaders:[],
                exclude:[/node_module\//]
            },
            {
                test:/\.html$/,
                loaders:'raw-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          template: 'index.ejs',
          inject: 'body',
          minify: {
            collapseWhitespace: true,
            conservativeCollapse: true
          }
        })
    ]
}