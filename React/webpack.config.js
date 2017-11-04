var path = require("path");
var mySelfPlugin = require("./plugins");

module.exports = {
    entry:{
        app:"./src/index"
    },
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'scripts/[name].[chunkhash:16].js'
    },
    module:{
        rules:[
            {test:/\.js/, use:'babel-loader'}
        ]
    },
    plugins:[
        new mySelfPlugin()
    ]
}