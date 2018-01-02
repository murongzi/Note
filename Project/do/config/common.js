/* 
    webpack教程： https://doc.webpack-china.org/concepts/
*/

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        verdor:path.resolve(__dirname, '../src/dys.js'),
    },
    output:{
        filename:'[name].[hash:7].js',
        chunkFilename:'[name].[hash:7].js',//添加这个可以
        path:path.resolve(__dirname, '../dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/, 
                loader:'babel-loader', 
                exclude: /node_modules/
            },
            {
                test:/\.(css|scss)$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.(png|jpg|jpeg|gif)/,
                loader:'file-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist')),
        new HtmlWebpackPlugin({
            title:'Production',
            template:path.resolve(__dirname, '../src/index.html'),
            inject:'body'
        })
    ],

    output:{
        filename:'[name].[hash:7].js',
        path:path.resolve(__dirname, '../dist')
    }
}
