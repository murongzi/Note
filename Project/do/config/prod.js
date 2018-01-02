const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./common.js');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    devtool:'source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('product')
        }),
        new UglifyJSPlugin({
            sourceMap:true
        }),

        /**提取公共部分 start */
        //https://doc.webpack-china.org/guides/code-splitting/
        new webpack.optimize.CommonsChunkPlugin({
            name:"common"
        })
        /**提取公共部分 end */
    ]
});

console.log('xxxxxx', process.env.NODE_ENV)