const path = require('path');

const contentBase = path.join(__dirname, './src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const TestPlugin = require('./plugins/test.plugin');


module.exports = {
    entry:path.join(contentBase, './index'),
    module: {
        rules:[
            {
                test:/\.scss$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader:'sass-resources-loader',
                            options:{
                                resources:[
                                    `${path.join(__dirname, './src/styles/common')}/**/*.scss`
                                    /* path.join(__dirname, './src/styles/_mix.scss'),
                                    path.join(__dirname, './src/styles/_var.scss') */
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test:/\.txt$/,
                use:[
                    {
                        loader:path.resolve(__dirname, './loaders/test.loader.js'),
                        options: {
                            a:'test',
                            b:'bb'
                        }
                    }
                ]
            }
        ]
    },
    output:{
        path:path.join(__dirname, './dist'),
        filename:'[name].[hash:7].js'
    },
    plugins:[
        new ExtractTextWebpackPlugin('app.[contenthash:7].css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        new TestPlugin({a:"test"})
    ]
}
