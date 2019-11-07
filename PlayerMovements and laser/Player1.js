var POLeft =65, PORight=68, POUp=87, PODown=83;
var Space=32;
var move_playertwo=10;
var ll=0;

  
 var con=new Object();

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
  }

  function showObjects(){
    setMove(Playerone);
    setMove(laser);
    }
  function updatePositions(){
    
          laser.y -= 20;

  }

    function loop(){
      if(new Date ().getTime() - ll  > 40){
        updatePositions();
        handleControlsSecond();
        showObjects();
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
var laser=DeclaringObjects('laser',0,-120,5,50);
     loop();
