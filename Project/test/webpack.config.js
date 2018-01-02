const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot:true
    },
    /* entry: './src/index.js', */
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        publicPath:'/',
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            /* 对css的处理 */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /* 对图片的处理 */
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            /* 对字体的处理 */
            {
                test:/\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader:'file-loader',
                options: {
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        /**请输入dist目录 start */
        new CleanWebPackPlugin(['dist']),
        /**请输入dist目录 end */

        /**生成manifest文件 start */
        new ManifestPlugin(),
        /**生成manifest文件 end */

        /**抽取js 至 html文件 start */
        new HtmlWebPackPlugin({
            title: 'Output Management'
        }),
        /**抽取js 至 html文件 end */

        /**hmr start */
        new webpack.NamedChunksPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        /**hmr end */

        new UglifyJSPlugin()
    ]
};
