var mysql = require('mysql');
const express=require("Express");
const bodyparser=require("body-parser");
var path = require("path");

var app=express();
app.use(express.static(path.join(__dirname,"ajaxFile")));
app.get ('/',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/client/details.html');
}
);
app.get ('/getData',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/client/ajaxFile/get_data.php');
}
);

app.use(express.static(path.join(__dirname,"ajaxFile")));
app.listen(53906) 
{
    console.log("COnnected to port number 53906!")
}  