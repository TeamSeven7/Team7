const express=require ("express");
const app=express();
var serveStatic = require('serve-static')
const dataparser=require("body-parser");
const urlencodedParser=
dataparser.urlencoded({extended:false});

// app.get ('/',function(req,res)
// { 
//     res.sendFile('C:\Users\mohit\Documents\GitHub\Team7\#Level1\Level1.html',{root : __dirname});
// }
// );
app.use(express.static('img'))
app.get ('/home',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/Homepage.html');
}
);

app.get ('/level1',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/%23Level1/Level1.html');
}
);

app.get ('Helppage.html',function(req,res)
{ 
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/Client/Helppage.html');
}
);


app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});