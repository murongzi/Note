var http = require('http');
var https = require('https');

/*http.get('http://api.jk.cn/m.api?_mt=itemSearch.searchItemForMall&bizType=B2C_ONLY&keyword=尊享&sort=%7B%22field%22%3A%22SCORE%22%2C%22direction%22%3A%22DESC%22%7D&categoryId=%5B%5D&tagId=%5B%5D&healthGoldItem=false&appChannel=wap&showCategory=true&page=1&size=10&merchantId=%5B%5D&_chl=iOS%7CWAP&_sm=md5&_sig=cc92d3728a743ffbaa19bef6a941b08b', function(err, data) {
    debugger
}).on('error', function(err) {
    console.log(err);
});*/
var url = 'http://api.jk.cn/m.api?_mt=itemSearch.searchItemForMall&bizType=B2C_ONLY&keyword=尊享&sort=%7B%22field%22%3A%22SCORE%22%2C%22direction%22%3A%22DESC%22%7D&categoryId=%5B%5D&tagId=%5B%5D&healthGoldItem=false&appChannel=wap&showCategory=true&page=1&size=10&merchantId=%5B%5D&_chl=iOS%7CWAP&_sm=md5&_sig=cc92d3728a743ffbaa19bef6a941b08b';

var options = {
    host: 'api.jk.cn',
    path: '/m.api',
    method: 'GET',
    headers: {
        "Host":"api.jk.cn",
        "User-Agent":"curl/7.51.0",
    }
};

var req = http.request(options, function(res){
  var arry = [], size = 0;

  res.on('data', function(chunk){
    //处理data事件，当接收到数据时触发
    arry.push(chunk);

    size += chunk.length;
  }).on('end', function(){
    //处理读取完所有数据的事件
    console.log(arry);
    var data = Buffer.concat(arry.map(v => v));
    debugger;
    
  }).on('error', function(err){
    //处理错误时的事件
  });
});
req.write('_mt=itemSearch.searchItemForMall&bizType=B2C_ONLY&keyword=尊享&sort=%7B%22field%22%3A%22SCORE%22%2C%22direction%22%3A%22DESC%22%7D&categoryId=%5B%5D&tagId=%5B%5D&healthGoldItem=false&appChannel=wap&showCategory=true&page=1&size=10&merchantId=%5B%5D&_chl=iOS%7CWAP&_sm=md5&_sig=cc92d3728a743ffbaa19bef6a941b08b');
req.end();

/*http.get(url, function(res) {
    var arry = [], size = 0;

    res.on('data', function(chunk) {
        arry.push(chunk);

        size += chunk.length;
    });
    res.on('end', function() {
        console.log(arry);
        var data = Buffer.concat(arry.map(v => v));
        debugger;
    });
}).on('error', function(e) {
debugger;
});*/

/*var req = https.request(options, function(res){
  res.on('data', function(data){
    //处理data事件，当接收到数据时触发
    debugger
  }).on('end', function(){
    //处理读取完所有数据的事件
    debugger
  }).on('error', function(err){
    //处理错误时的事件
    debugger
    console.log(err);
  });
});*/


//抓取腾讯页面
/*http.get('http://www.qq.com', function(res) {
    var arry = [], size = 0;

    res.on('data', function(chunk) {
        arry.push(chunk);

        size += chunk.length;
    });
    res.on('end', function() {
        console.log(arry);
        var data = Buffer.concat(arry.map(v => v));
        debugger;
    });
});*/

