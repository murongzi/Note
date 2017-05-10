var http = require('http');

/**
 * nodejs中执行shell脚本
 */
var cp = require("child_process");
cp.exec("networksetup -listnetworkserviceorder", function(){
    console.log(arguments);
});















/*
 * 检测可使用的端口
 */
/*var basePort = 9973;

function detechProt(port) {
    var server = http.createServer(function(){}),
        port = port || basePort;

    server.on('error', function(){
        console.log('端口已经被绑定,自动更换端口');

        port++;
        detechProt(port);
    });

    server.listen(port, "127.0.0.1", function(params){
        console.log('当前端口为:' + port);

        server.once("close", function(){

        });

        server.close();
        console.log(params);
    });
}

detechProt();*/