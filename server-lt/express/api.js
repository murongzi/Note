var express = require('express');
var api = express.Router();
var util = require('./common/util');
var mime = require('mime');
var qs = require('querystring');

api.route('/list').get(function(req, res) {
    util.queryList().then(function(data) {
        data = {
            code:0,
            result:data
        };

        res.set({
            'Content-Type': mime.lookup('json')
        });
        res.send(JSON.stringify(data));
    }, function() {
        data = {
            code:-100,
            errorMsg:"查询数据出错"
        }
        res.set({
            'Content-Type': mime.lookup('json')
        });
        res.send(JSON.stringify(data));
    });
});

api.route('/modify').post(function(req, res) {
    console.log(req.body);

    util.modify(req.body).then(function(data) {
        data = {
            code:0,
            errorMsg:"保存数据成功！"
        }
        res.set({
            'Content-Type': mime.lookup('json')
        });
        res.send(JSON.stringify(data));
    }, function() {
        data = {
            code:-100,
            errorMsg:"保存数据出错！"
        }
        res.set({
            'Content-Type': mime.lookup('json')
        });
        res.send(JSON.stringify(data));
    });
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
