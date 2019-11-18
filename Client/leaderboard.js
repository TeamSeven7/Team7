var mysql = require('mysql');
const express=require("Express");
const bodyparser=require("body-parser");

var app=express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leaderboard"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "insert into highscore values ('mohit',500);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted name Mohit with score 500");
  });
});


app.listen(53906)   