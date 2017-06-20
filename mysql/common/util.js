var mysql = require('mysql');
var config = require('../config');

var cache = {};

var openDB = function() {
    var connection;

    connection = mysql.createConnection({
        host: "localhost",
        user: config.username,
        password: config.password,
        database:config.database
    });

    connection.connect();

    return connection;
};

var closeDB = function(connection) {
    connection.end();
};

module.exports = {
    //查询语句
    query:function(callback) {
        var connection = openDB();

        connection.query('select * from user where id = 1', function(err, results) {
            if (err) throw err;

            callback && callback(results);
        });

        closeDB(connection);
    },
    //插值语句语句
    insert:function() {
        var connection = openDB();

        connection.query('insert into user set ?', {name:"apache", age:10,birth:"1989-01-09"}, function(err, results) {
            if (err) throw err;

        });
        closeDB(connection);
    },
    //更新语句
    update:function() {
        var connection = openDB();
        connection.query('update user set age=10 where id=4', function(err, results) {
            if (err) throw err;

            debugger;
        });
        closeDB(connection);
    }
}