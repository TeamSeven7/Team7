var PTLeft =37, PTRight=39, PTUp=38, PTDown=40;
var Space=32;
var move_player=10;


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
function toggleKey(keyCode, isPressed){
   if(keyCode == PTLeft){
   	con.left = isPressed;
   }
   	if(keyCode == PTRight){
   	con.right = isPressed;
   }
   if(keyCode == PTUp){
   	con.up = isPressed;
 }
 if(keyCode == PTDown){
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
   if(sprite.x + sprite.w > 480){
   	sprite.x = 480 - sprite.w;
   }
   if(sprite.y + sprite.h > 480){
   	sprite.y = 480 - sprite.h;
   }

}
	function setMove(sprite){
		var p=document.getElementById(sprite.element);
		p.style.left = sprite.x + 'px';
		p.style.top = sprite.y + 'px';
	}

	function handleControlsSecond(){
		if(con.up){
			Playertwo.y -= move_player;
		}
		if(con.down){
			Playertwo.y += move_player;
		}
		if(con.left){
			Playertwo.x -= move_player;
		}
		if(con.right){
			Playertwo.x += move_player;
		}
		if(con.space && laser.y <= -120 ){
			laser.x = Playertwo.x + 50 ;
			laser.y = Playertwo.y - laser.h;
		}
		ensureSprite(Playertwo);
	}

	function showObjects(){
		setMove(Playertwo);
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
toggleKey(evt.keyCode , true);
};
document.onkeyup = function(evt){
toggleKey(evt.keyCode , false);
};

var Playertwo=DeclaringObjects('Playertwo',0,460,100,100);
var laser=DeclaringObjects('laser',0,-120,5,50);
     loop();
