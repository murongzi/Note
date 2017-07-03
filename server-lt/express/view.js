var express = require('express');
var views = express.Router();

views.route('*').get(function(req, res, next) {
    var path = req.originalUrl == "/" ? "index" : req.originalUrl.substr(1);

    res.render(path + '.ejs');
});

module.exports = views;


