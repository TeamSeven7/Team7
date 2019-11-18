const express=require ("express");
const app= require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const dataparser=require("body-parser");
const urlencodedParser=
dataparser.urlencoded({extended:false});


// app.get ('/',function(req,res)
// { 
//     res.sendFile('C:\Users\mohit\Documents\GitHub\Team7\#Level1\Level1.html',{root : __dirname});
// }
// );


app.get('/homepage',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Desktop/game/homepage.html');
}
);


app.get('/level1',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Documents/Github/Team7/Client/Level1.html');
}
);

app.get('/level2',function(req,res)
{ 
    res.sendFile('C:/Users/2001a/Documents/Github/Team7/Client/level2-updated.html');
}
);

app.get('/', function(req,res)
{
    res.redirect('/homepage')
})

app.use('/game',express.static(__dirname));


//#####
let players =0;
io.on('connection',function(socket){                //whenever theres a request for connection, socket function to be initiated
        console.log("user connected ");               // each time you reload the page, it displays user connected
        players++;

        socket.emit('homePage', { description: 'A custom event named testerEvent!'});

        io.sockets.emit('broadcast',{ description: players + 'clients connected!'});



        socket.on('disconnect',function(event){        // displays disconnected when page closed. each time u refresh, it disconnects
            console.log("disconnected");
            players--;
              })
         socket.on('clientEvent', function(data) {
             console.log(data);
        });
       
});        


http.listen(8080,function(){console.log("Server at 8080"
    );});
    
