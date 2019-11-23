var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT name, score FROM (table_name) ORDER BY score DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});