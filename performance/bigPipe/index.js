var http = require('http');

http.createServer(function(req, res) {
    /**
     * 设置了content-length之后，浏览器会将接收的数据长度与content-length做对比
     * 如果相等，则表示响应结束
     * 下面的代码放开后即可看到效果
     * **/
    //res.writeHead(200, {'Content-Type':'text/html', "Content-length":9})

    res.writeHead(200, {'Content-Type':'text/html'})
    res.write("<div>hello world!!!</div><img src='http://www.baidu.com/img/bd_logo1.png' />");

    setTimeout(function() {
        res.write("<div>hello world222!!!</div>");

        setTimeout(function() {
            res.write("<div>hello world333!!!</div>");
            res.end();
        }, 5000);
    }, 5000);


}).listen(8888, function(){
    console.log('create http request');
});