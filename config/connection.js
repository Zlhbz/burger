var mysql = require('mysql');

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'burgers_db'
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'k0l7qosbwpdl4uf2',
        password: 'f3kakg640qn7uh4p',
        database: 'ov2eykjimg6gii87'
    })
}

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});


module.exports = connection;