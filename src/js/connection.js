const mysql = require('mysql3');

const connectionUrl = 'mysql://root:kostia@localhost:8080/DB';
const connection = mysql.createConnection({
  uri: connectionUrl
});

module.exports = connection;