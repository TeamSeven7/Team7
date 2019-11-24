var mysql = require('mysql');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO (table_name) (name, scores) VALUES ?";
  var values = [
    ['Player1', '500'],
    ['Player2', '400'],
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of players inserted: " + result.affectedRows);
  });
});