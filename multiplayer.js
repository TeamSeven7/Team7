var express=require ("express");
var app=express();
var path = require("path");



// app.get ('/',function(req,res)
// { 
//     res.sendFile('C:\Users\mohit\Documents\GitHub\Team7\#Level1\Level1.html',{root : __dirname});
// }
// );
app.use("/", function(req,res,next){

    console.log(req.url);
    next();
});
app.use(express.static(path.join(__dirname,"img")));
app.get ('/',function(req,res)
{ 
    res.sendFile(path.join(__dirname,"Client","homepage.html"));
}
);

app.get ('/level1',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/%23Level1/Level1.html');
}
);

app.get ('/Helppage.html',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/Helppage.html');
}
);
app.get ('/resume',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/LEVEL2-UPDATED/index.html');
}
);


app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});