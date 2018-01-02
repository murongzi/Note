const common = require('./common');
const merge = require('webpack-merge');
const path = require('path');


module.exports = merge(common, {
    devtool:'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist')
    }
});

console.log(module.exports)