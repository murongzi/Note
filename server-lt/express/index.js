var express = require('express');

var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);

app.get('/ab+c', function(req, res) {
    res.send(req.originalUrl || 'fadsfasdfasdfadsfa');
});

app.listen(8800);



/*app.route('*').all(function(req, res, next) {
    next();
    res.send('匹配所有的路由');
}).get(function(req, res, next) {
    console.log(res.json());
});

app.listen(8800);*/
/*app.use('/', function(req, res, next) {
    res.render('index.ejs');
});*/

/*var r1 = express.Router();

r1.get('/aa', function(req, res, next) {
    res.render('aaa');
})*/

/*app.use('/aa/:id', function(req, res, next) {
    console.log(req.params.id);
    if (req.params.id == 0) {next('route')} else {next();};
}, function(req, res) {
    res.send('ccc');
});

app.use('/aa/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send('aaaaaaaaaaaa');
});

app.listen(8800);*/