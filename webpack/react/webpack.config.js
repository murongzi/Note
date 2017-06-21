
var path = require('path');
var args = require('minimist')(process.argv.slice(2));
var env;

if  (args._.length > 0 && args._.indexOf('start') != -1) {
    env = "test";
} else if (args.env) {
    env = args.env;
} else {
    env = "dev";
}

module.exports = require("./config/" + env);
