const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    /**
     * 
     */
    resolve: {
        /* enforceModuleExtension:true, */
        /**
         * 开发引入模块的时候入 import util from './util';允许以这种形式引入util.ts文件，默认省略ts的拓展
         */
        extensions: ['.ts', '.js']
    },
    entry: {
        app: path.resolve(__dirname, './src/index.ts'),
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'scripts/[name].[hash:7].js',
        chunkFilename: 'scripts/[name].[hash:7].js',
        publicPath:'./'/* ,
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: 'myTst' */
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true
                },
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            /**
             * CommonsChunkPlugin插件的作用是将脚本中公共部分提取到单独的脚本中
             * 如果这个name和entry中定义入口文件有同名的则提取值同名的文件中，否则新增一个文件
             * 下面的name指定的是entry入口文件配置文件中的其中一个，所以最终会配置值app打包后的文件中
             */
            name: 'common'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.ejs'),
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
