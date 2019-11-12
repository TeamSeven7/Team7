const express=require ("express");
const app=express();
const dataparser=require("body-parser");
const urlencodedParser=
dataparser.urlencoded({extended:false});

app.get ('/',function(req,res)
{ 
    res.sendFile('HomePage.html',{root : __dirname});
}
);

app.get ('/gamescreen',function(req,res)
{ 
    res.sendFile('/gamescreen.html',{root : __dirname});
}
);

app.get ('/loader',function(req,res)
{ 
    res.sendFile('loader.html',{root : __dirname});
}
);

app.listen(53906,function()
{
    console.log("Listening at server port 53906");
});