var mysql = require('mysql');

var config = {
  host     : 'localhost',
  user     : 'root',
  password : 'Mzd-890810',
  database : 'mzd',
  charset  : "utf8"
}

module.exports = {
    queryList:function() {
        var connection = mysql.createConnection(config);
        connection.connect();

        return new Promise(function(resolve, reject) {
            connection.query('SELECT * from user', function (error, results, fields) {
                if (error) throw error;
                
                resolve(results);
            });

            connection.end();
        });
    },
    modify:function(data) {
        if (!data) throw "error";

        var connection = mysql.createConnection(config);
        connection.connect();

        return new Promise(function(resolve, reject) {
            connection.query('insert into user set ?', data, function (error, results, fields) {
                if (error) throw error;
                
                resolve(results);
            });

            connection.end();
        });
    }
}