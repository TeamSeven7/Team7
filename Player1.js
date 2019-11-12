var POLeft =65, PORight=68, POUp=87, PODown=83;
var PTLeft =37, PTRight=39, PTUp=38, PTDown=40;
var Space=32;
var PTShoot=13;
var move_playertwo=10;
var move_playertwotwo=10;
var ll=0;

  
 var con=new Object();
 var con2=new Object();
 var con3=new Object();

function DeclaringObjects(element, x , y , w , h){
  var result = new Object();
   result.element = element;
    result.x = x;
    result.y = y;
      result.w = w;
      result.h = h;

     return result;
}
function toggleKeyTwo(keyCode, isPressed){
   if(keyCode == POLeft){
    con.left = isPressed;
   }
    if(keyCode == PORight){
    con.right = isPressed;
   }
   if(keyCode == POUp){
    con.up = isPressed;
 }
 if(keyCode == PODown){
    con.down = isPressed;
   }
if(keyCode == Space){
    con.space = isPressed;
   }
   if(keyCode == PTLeft){
    con2.left = isPressed;
   }
    if(keyCode == PTRight){
    con2.right = isPressed;
   }
   if(keyCode == PTUp){
    con2.up = isPressed;
 }
 if(keyCode == PTDown){
    con2.down = isPressed;
   }
   if(keyCode == PTShoot){
    con2.enter = isPressed;
   }
}


function ensureSprite(sprite){
   if(sprite.x < 100){
    sprite.x=100;
   }
   if(sprite.y < 100){
    sprite.y=100;
   }
   if(sprite.x + sprite.w > 1200){
    sprite.x = 1200 - sprite.w;
   }
   if(sprite.y + sprite.h > 680){
    sprite.y = 680 - sprite.h;
   }

}


  function setMove(sprite){
    var p=document.getElementById(sprite.element);
    p.style.left = sprite.x + 'px';
    p.style.top = sprite.y + 'px';
  }

  function handleControlsSecond(){
    if(con.up){
      Playerone.y -= move_playertwo;
    }
    if(con.down){
      Playerone.y += move_playertwo;
    }
    if(con.left){
      Playerone.x -= move_playertwo;
    }
    if(con.right){
      Playerone.x += move_playertwo;
    }
    if(con.space && laser.y <= -120 ){
      laser.x = Playerone.x + 50 ;
      laser.y = Playerone.y - laser.h;
    }
    ensureSprite(Playerone);
    if(con2.up){
      Playertwo.y -= move_playertwotwo;
    }
    if(con2.down){
      Playertwo.y += move_playertwotwo;
    }
    if(con2.left){
      Playertwo.x -= move_playertwotwo;
    }
    if(con2.right){
      Playertwo.x += move_playertwotwo;
    }
    if(con2.enter && lasertwo.y <= -120 ){
      lasertwo.x = Playertwo.x + 50 ;
      lasertwo.y = Playertwo.y - lasertwo.h;
    }
    ensureSprite(Playertwo);
    
  }

  var intervalID = window.setInterval(enemyShooting, 5000);

  function enemyShooting(){
    if(enemylaser.y <= 20 ){
      enemylaser.x = Enemyone.x - 40 ;
      enemylaser.y = Enemyone.y + enemylaser.h;
    }
    if(enemylaser2.y <= -120 ){
      enemylaser2.x = Enemytwo.x + 50 ;
      enemylaser2.y = Enemytwo.y - enemylaser2.h;
    }
    if(enemylaser3.y <= -120 ){
      enemylaser3.x = Enemythree.x + 50 ;
      enemylaser3.y = Enemythree.y - enemylaser3.h;
    }
    if(enemylaser4.y <= -120 ){
      enemylaser4.x = Enemyfour.x + 50 ;
      enemylaser4.y = Enemyfour.y - enemylaser4.h;
    }
    if(enemylaser5.y <= -120 ){
      enemylaser5.x = Enemyfive.x + 50 ;
      enemylaser5.y = Enemyfive.y - enemylaser5.h;
    }
    if(enemylaser6.y <= -120 ){
      enemylaser6.x = Enemysix.x + 50 ;
      enemylaser6.y = Enemysix.y - enemylaser6.h;
    }
    if(enemylaser7.y <= -120 ){
      enemylaser7.x = Enemyseven.x + 50 ;
      enemylaser7.y = Enemyseven.y - enemylaser7.h;
    }
    if(enemylaser8.y <= -120 ){
      enemylaser8.x = Enemyeight.x + 50 ;
      enemylaser8.y = Enemyeight.y - enemylaser8.h;
    }
     
    
    ensureSprite(Enemyone);
    ensureSprite(Enemytwo);
    ensureSprite(Enemythree);
    ensureSprite(Enemyfour);
    ensureSprite(Enemyfive);
    ensureSprite(Enemysix);
    ensureSprite(Enemyseven);
    ensureSprite(Enemyeight);
  }
  
  function showObjects(){
    setMove(Playerone);
    setMove(Playertwo);
    setMove(laser);
    setMove(lasertwo);
    setMove(enemylaser);
    setMove(enemylaser2);
    setMove(enemylaser3);
    setMove(enemylaser4);
    setMove(enemylaser5);
    setMove(enemylaser6);
    setMove(enemylaser7);
    setMove(enemylaser8);
    
  }

  function updatePositions(){
    laser.y -= 20;
    lasertwo.y -= 20;
    enemylaser.y += 20;
    enemylaser2.y += 20;
    enemylaser3.y += 20;
    enemylaser4.y += 20;
    enemylaser5.y += 20;
    enemylaser6.y += 20;
    enemylaser7.y += 20;
    enemylaser8.y += 20;        
  }

  function touches(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }
  
  
 
  function collisionChecking(sprite){
    if (touches(sprite, laser)) {
      var background = document.getElementById(sprite.backgroundImage); 
      var element = document.getElementById(sprite.element);
      element.style.backgroundImage = "url('https://i.gifer.com/3iCN.gif')";
        laser.y = -laser.h; 
        var respawntimer = window.setInterval(respawn, 5000);
        function respawn() {
          element.style.backgroundImage = background;
        }
    }
    if (touches(sprite, lasertwo)) {
      var background2 = document.getElementById(sprite.backgroundImage); 
      var element2 = document.getElementById(sprite.element);
      element2.style.backgroundImage = "url('https://i.gifer.com/3iCN.gif')";
        lasertwo.y = -lasertwo.h; 
        var respawntimer2 = window.setInterval(respawn2, 5000);
        function respawn2() {
          element2.style.backgroundImage = background2;
        }
    }
  }


  


function loop(){
  if(new Date ().getTime() - ll  > 40){
    updatePositions();
    handleControlsSecond();
    showObjects();
    collisionChecking(Enemyone);
    collisionChecking(Enemytwo);
    collisionChecking(Enemythree);
    collisionChecking(Enemyfour);
    collisionChecking(Enemyfive);
    collisionChecking(Enemysix);
    collisionChecking(Enemyseven);
    collisionChecking(Enemyeight);
    ll=new Date().getTime();
  }
  setTimeout('loop();' , 2);
}
document.onkeydown = function(evt){
toggleKeyTwo(evt.keyCode , true);
};

document.onkeyup = function(evt){
toggleKeyTwo(evt.keyCode , false);
};




var Playerone=DeclaringObjects('Playerone',430,460,60,100);
var Playertwo=DeclaringObjects('Playertwo',330,460,60,100);
var Enemyone=DeclaringObjects('Enemyone',1130,20,65,40);
var Enemytwo=DeclaringObjects('Enemytwo',970,20,65,40);  
var Enemythree=DeclaringObjects('Enemythree',810,-20,65,40);  
var Enemyfour=DeclaringObjects('Enemyfour',650,-20,65,40);  
var Enemyfive=DeclaringObjects('Enemyfive',490,20,65,40);  
var Enemysix=DeclaringObjects('Enemysix',330,20,65,40);    
var Enemyseven=DeclaringObjects('Enemyseven',170,20,65,40);
var Enemyeight=DeclaringObjects('Enemyeight',10,20,65,40);  
var laser=DeclaringObjects('laser',0,-120,5,50);
var lasertwo=DeclaringObjects('lasertwo',0,-120,5,50);
var enemylaser=DeclaringObjects('enemylaser',1160,20,65,40);
var enemylaser2=DeclaringObjects('enemylaser2',1000,20,65,40);
var enemylaser3=DeclaringObjects('enemylaser3',850,20,65,40);
var enemylaser4=DeclaringObjects('enemylaser4',690,20,65,40);
var enemylaser5=DeclaringObjects('enemylaser5',530,20,65,40);
var enemylaser6=DeclaringObjects('enemylaser6',370,20,65,40);
var enemylaser7=DeclaringObjects('enemylaser7',230,20,65,40);
var enemylaser8=DeclaringObjects('enemylaser8',80,20,65,40);
     loop();