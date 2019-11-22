var express=require ("express");
var app=express();
var path = require("path");
var bodyParser = require('body-parser');


// app.use("/", function(req,res,next){

//     console.log(req.url);
//     next();
// });

app.use(express.static('C:/User/mohit/Documents/GitHub/Team7/Client/img'));
app.get ('/',function(req,res)
{ 
    res.sendFile('homepage.html',{root : __dirname});
});
// app.post()

app.use(express.static('C:/User/mohit/Documents/GitHub/Team7/Client/LEVEL1'));
app.get ('/level1',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/LEVEL1/Level1.html');
});

app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/Client'));
app.get ('/Helppage',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/Helppage.html');
});

app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2'));
app.get ('/resume',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2/level2-updated.html');
}
);


app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});