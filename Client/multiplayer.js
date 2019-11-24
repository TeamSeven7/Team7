var express=require ("express");
var app=express();
var path = require("path");
var bodyParser = require('body-parser');

var mysql = require('mysql');
var name = "";
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "leaderboard"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
const dataparser=require("body-parser");
const urlencodedParser=
dataparser.urlencoded({extended:false});


app.use("/", function(req,res,next){

    console.log(req.url);
    next();
});

app.use(express.static('img',{root : __dirname}));
app.use(express.static("C:/Users/mohit/Documents/GitHub/Team7/Client/LEVEL1/LEVEL2/img"));
app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/Client'));
app.use(express.static('C:/User/mohit/Documents/GitHub/Team7/Client/LEVEL1'));
app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2'));
app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/Client/ajaxFile'));



app.post('/finish',urlencodedParser,function(req,res)
{
    var formdata=req.body.name ;
    console.log(req.body);
    res.send(formdata);
    res.sendFile('/finish.html');

});


app.get ('/homepage.html',function(req,res)
{ 
    res.sendFile('homepage.html',{root : __dirname});
});


app.get ('/finish',function(req,res)
{ 
    res.sendFile('/finish.html',{root:__dirname});
    
    this.name = req.query.name;
    var sql = "INSERT INTO highscore VALUES ('"+ this.name +"',1500);";
    
    con.query(sql, function(err){
        if(err)
            res.end("Error.");
    });
});


app.get ('/Helppage.html',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/Helppage.html');
});

app.get ('/resume',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2/Level2.html');
    
});

app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});