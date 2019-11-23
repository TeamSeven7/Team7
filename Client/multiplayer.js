var express=require ("express");
var app=express();
var path = require("path");
var bodyParser = require('body-parser');


// app.use("/", function(req,res,next){

//     console.log(req.url);
//     next();
// });

app.use(express.static('img',{root : __dirname}));
app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/Client'));
app.use(express.static('C:/User/mohit/Documents/GitHub/Team7/Client/LEVEL1'));
app.use(express.static('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2'));

app.get ('/homepage.html',function(req,res)
{ 
    res.sendFile('homepage.html',{root : __dirname});
});
// app.post()


app.get ('/LEVEL1/Level1.html',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Documents/GitHub/Team7/Client/LEVEL1/Level1.html');
});

app.get ('/Helppage.html',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Documents/GitHub/Team7/Client/Helppage.html');
});

app.get ('/resume',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Documents/GitHub/Team7/LEVEL2/level2-updated.html');
}
);

app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});