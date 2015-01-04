var mysql = require('mysql');
var pool  = mysql.createPool({
	connectionLimit : 4,
	host     : 'us-cdbr-iron-east-01.cleardb.net',
	user     : 'b351c9dccc8aea',
	password : '542871e3',
	port: '3306',
	database: 'ad_69add87086ba081',
	queueLimit: 0,
	waitForConnection: true
});

exports.fireQuery=function (query, callBack) {
pool.getConnection(function(err, connection) {
if (err) {
console.error('error connecting: ' + err.stack);
return;
}
console.log('connected as id ' + connection.threadId);
console.log(query);
connection.query(query,callBack);
connection.release();
});
};

