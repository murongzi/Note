var express = require('express');

var path = require('path');

var bodyParser = require('body-parser')

var app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, './static')));

app.use(function(req, res, next) {
    console.log('index.js ==>  ', req.originalUrl);
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*
api请求的注册放在页面或者其他路由注册的前面
满足api路由的时候，以api对应的路由返回为准
不满足的时候，继续走下面的路由
如果 app.use('/', require("./view.js"))在/api/*的前面，那么在/的路由中需要对api/*的路由进行排除
*/
//app.get('/api/*', require("./api.js"));
//app.use('/api', jsonParser, require("./api.js"));
app.use('/api', require("./api.js"));

app.use('/', require("./view.js"));

/*app.get('/get', function(req, res) {
    console.log('get == >', req.originalUrl);

    res.send('fasdfasdf');
});

app.get('/get/:id', function(req, res) {
    console.log('get id == >', req.originalUrl);

    res.send('xxxxxxxx');
});*/


app.listen(8800);
