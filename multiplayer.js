const express=require ("express");
const app=express();
const dataparser=require("body-parser");
const urlencodedParser=
dataparser.urlencoded({extended:false});


app.get ('/gamescreen',function(req,res)
{ 
    
    res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/gamescreen.html',{root : __dirname});
}
);

// app.get ('/loader',function(req,res)
// { 
//     res.sendFile('C:/Users/mohit/Documents/GitHub/Team7/loader.html',{root : __dirname});
// }
// );

app.listen(53906,function()
{console.log("Listening at server port 53906")});