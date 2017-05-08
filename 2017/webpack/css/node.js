var path = require('path');

var rootPath = path.join(__dirname, '../');

var ExtractTextWebpackPlugin= require('extract-text-webpack-plugin');

module.exports = {
    entry:rootPath + 'css/index.css',
    output:{
        path:rootPath + 'dist/css',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css/,
                loader: ExtractTextWebpackPlugin.extract(["css"], {
                    publicPath: path.join(__dirname, "../dist/css")
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin("styles.css")
    ]
};
