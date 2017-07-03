var express = require('express');
var api = express.Router();
var util = require('./common/util');
var mime = require('mime');
var qs = require('querystring');

api.route('/detail').get(function(req, res) {
    util.queryList().then(function(data) {
        res.set({
            'Content-Type': mime.lookup('json')
        });
        res.send(JSON.stringify(data));
    });
});

api.route('/modify').post(function(req, res) {
    console.log(req.body);

    util.modify(req.body);
    //非框架解析
    /*var length = 0, arry = [];

    req.on("data", function(chunk) {
        arry.push(chunk);
    })

    req.on("end", function() {
        var data = Buffer.concat(arry).toString();
    })*/
});

module.exports = api;
