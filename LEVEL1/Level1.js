// Variables required throughout the program
var POLeft =65, PORight=68, POUp=87, PODown=83;
var PTLeft =37, PTRight=39, PTUp=38, PTDown=40;
var Space=32;
var testshoot= 9;
var PTShoot=13;
var POShoot=13;
var move_playertwo=10;
var move_playertwotwo=10;
var ll=0;
var P1Health = 100;
var P2Health = 100;
var EnemiesDead = 0;
var P1Score = 0;
var P2Score = 0;

// Objects used for the controls

 var con=new Object();
 var con2=new Object();
 var con3=new Object();

// Because the game uses collision, we need to get the x, y, width and height of objects to make it work
function DeclaringObjects(element, x , y , w , h){
  var result = new Object();
   result.element = element;
    result.x = x;
    result.y = y;
      result.w = w;
      result.h = h;

     return result;
}

// Making the controls work for the players

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
   if(keyCode == POShoot){
    con2.enter = isPressed;
   }
   if(keyCode == testshoot){
    con3.tab = isPressed;
   }
}


// This function makes the sprites used have correct dimensions

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

// This function, as in the name, sets a sprite to be able to move with controls
  function setMove(sprite){
    var p=document.getElementById(sprite.element);
    p.style.left = sprite.x + 'px';
    p.style.top = sprite.y + 'px';
  }

// Making the players move when a key is pressed and making the laser work too when the key is pressed for it
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
    if(con.space && laser.y <= -120 ){  // The maths here required a lot of testing to get correct
      laser.x = Playerone.x + 50 ;  // Makes the laser shoot out of the middle of the player
      laser.y = Playerone.y - laser.h; // Same as above but for the height, a lot of testing needed for this one too
    }
    ensureSprite(Playerone); // ensureSprite used because the players need movement
    if(con2.up){
      Playertwo.y -= move_playertwotwo;      // Same as above for player2
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

  // Following functions used to make the enemies shoot. This one was harder because of the positioning of the enemies
  
  var enemyshootingrepeat = window.setInterval(enemyShootingOne, 4000); // Making an interval timer for enemies to shoot repeatedly
  function enemyShootingOne(){
    if(enemylaser.x >= 0 ){
      enemylaser.x = Enemyone.x + 30 ;
      enemylaser.y = Enemyone.y - enemylaser.h;
    }
    if(enemylaser5.y >= 0 ){
      enemylaser5.x = Enemyfive.x + 30 ;
      enemylaser5.y = Enemyfive.y - enemylaser5.h;
    }                                                   // Again, more testing and playing with numbers to make it accurate
    if(enemylaser6.y >= 0 ){
      enemylaser6.x = Enemysix.x + 30 ;
      enemylaser6.y = Enemysix.y - enemylaser6.h;
    }
    if(enemylaser10.y >= 0 ){
      enemylaser10.x = Enemyten.x + 30 ;
      enemylaser10.y = Enemyten.y - enemylaser10.h;
    }
    
    
  }

  var enemyshootingrepeat2 = window.setInterval(enemyShootingTwo, 7000); // Another timer to make it more random

  function enemyShootingTwo() {
    if(enemylaser2.y >= 0 ){
      enemylaser2.x = Enemytwo.x + 30 ;
      enemylaser2.y = Enemytwo.y - enemylaser2.h;
    }
    if(enemylaser4.y >= 0 ){
      enemylaser4.x = Enemyfour.x + 30 ;
      enemylaser4.y = Enemyfour.y - enemylaser4.h;
    }
    if(enemylaser3.y >= 0 ){
      enemylaser3.x = Enemythree.x + 30 ;
      enemylaser3.y = Enemythree.y - enemylaser3.h;
    }
    if(enemylaser7.y >= 0 ){
      enemylaser7.x = Enemyseven.x + 30 ;
      enemylaser7.y = Enemyseven.y - enemylaser7.h;
    }

  }
  
  var enemyshootingrepeat3 = window.setInterval(enemyShootingThree, 3000); // And another timer

  function enemyShootingThree() {
    
    
    if(enemylaser8.y >= 0 ){
      enemylaser8.x = Enemyeight.x + 30 ;
      enemylaser8.y = Enemyeight.y - enemylaser8.h;
    }
    if(enemylaser9.y >= 0 ){
      enemylaser9.x = Enemynine.x + 30 ;
      enemylaser9.y = Enemynine.y - enemylaser9.h;
    }
    
    if(enemylaser11.y >= 0 ){
      enemylaser11.x = Enemyeleven.x + 30 ;
      enemylaser11.y = Enemyeleven.y - enemylaser11.h;
    }
    if(enemylaser12.y >= 0 ){
      enemylaser12.x = Enemytwelve.x + 30 ;
      enemylaser12.y = Enemytwelve.y - enemylaser12.h;
    }
    if(enemylaser13.y >= 0 ){
      enemylaser13.x = Enemythirteen.x + 30 ;
      enemylaser13.y = Enemythirteen.y - enemylaser13.h;
    }
  }

// Function to show the objects that move on the map

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
    setMove(enemylaser9);
    setMove(enemylaser10);
    setMove(enemylaser11);
    setMove(enemylaser12);
    setMove(enemylaser13);
    
  }

// This function determines the speed of the lasers used. Applicable for both the player and enemy lasers  
  function updatePositions(){
    laser.y -= 20;
    lasertwo.y -= 20;
    enemylaser.y += 7;
    enemylaser2.y += 4.2;
    enemylaser3.y += 4.2;
    enemylaser4.y += 4.2;
    enemylaser5.y += 7;
    enemylaser6.y += 7;
    enemylaser7.y += 4.2;
    enemylaser8.y += 7;
    enemylaser9.y += 7;
    enemylaser10.y += 7;
    enemylaser11.y += 7;
    enemylaser12.y += 7;
    enemylaser13.y += 7;
            
  }

// This function was used for collision detection to avoid using the collision detection library.
// It compares the height, width, x and y elements of both the sprites that would touch each other.
// The comparison has to be done in the correct way, i.e. (a.x<b.x) and (a.x>.bx) have different outputs.
// This also required a lot of testing to make sure it works  
  function touches(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }
  
  
// Function to check if a player manages to shoot an enemy, if so then up the score and remove the enemy 
  function collisionChecking(sprite){
    if (touches(sprite, laser)) {
        P1Score = P1Score + 1;
        document.getElementById("scorecounter").innerHTML = "P1 Score: " + P1Score;
        EnemiesDead = EnemiesDead + 1;
      var element = document.getElementById(sprite.element);
      element.style.backgroundImage = "url('https://media1.giphy.com/media/sNOnZHzeX86Fa/source.gif')";
        laser.y = -laser.h; 
        var respawntimer = window.setInterval(setHidden, 5000);
        function setHidden() {
          delete element;
          delete sprite;
          element.style.visibility = 'hidden';
          
        }
    }
    if (touches(sprite, lasertwo)) {
        P2Score = P2Score + 1;
        document.getElementById("scorecounter2").innerHTML = "P2 Score: " + P2Score;
        EnemiesDead = EnemiesDead + 1;
      var background2 = document.getElementById(sprite.backgroundImage); 
      var element2 = document.getElementById(sprite.element);
      element2.style.backgroundImage = "url('https://i.gifer.com/3iCN.gif')";
        lasertwo.y = -lasertwo.h; 
        var respawntimer2 = window.setInterval(setHidden2, 5000);
        function setHidden2() {
          delete element;
          delete sprite;
          element2.style.visibility = 'hidden';
          
        }
    }
    if (EnemiesDead == 13) {
        alert("Congratulations! Please continue to the  next level.");
  window.location ='/Users/usamaaibani/Desktop/Team7-master/Client/LEVEL2/Level2.html';
  clearInterval(interval);
    }
  }

  
// This function checks for if an enemy laser touches a player. If so, then reduce the player health  
  function collisionCheckingPlayers(sprite) {
    ensureSprite(healthcounter);
    if (touches(sprite, enemylaser))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser2))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser3))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser4))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser5))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser6))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser7))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  }
    if (touches(sprite, enemylaser8))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
    if (touches(sprite, enemylaser9))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
    }
    if (touches(sprite, enemylaser10))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
    }
    if (touches(sprite, enemylaser11))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
    }
    if (touches(sprite, enemylaser12))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
    }
    if (touches(sprite, enemylaser13))  {
      P1Health--;
      document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
    }
    
  if (P1Health==0)
{
  alert("Nice try! You lost the first level, however you can now attempt the second level.");
  window.location ='/Users/usamaaibani/Desktop/Team7-master/Client/LEVEL2/Level2.html';
  clearInterval(interval);
}

}

// Same as above but for player2
function collisionCheckingPlayersTwo(sprite) {
  ensureSprite(healthcounter2);
  if (touches(sprite, enemylaser))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser2))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser3))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser4))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser5))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser6))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser7))  {
    P2Health--;
    document.getElementById("healthcounter2").innerHTML = "Health: " + P2Health;
}
  if (touches(sprite, enemylaser8))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  if (touches(sprite, enemylaser9))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  if (touches(sprite, enemylaser10))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  if (touches(sprite, enemylaser11))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  if (touches(sprite, enemylaser12))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  if (touches(sprite, enemylaser13))  {
    P1Health--;
    document.getElementById("healthcounter").innerHTML = "Health: " + P1Health;
  } 
  
if (P2Health==0)
{
  alert("Nice try! You lost the first level, however you can now attempt the second level.");
  window.location ='/Users/usamaaibani/Desktop/Team7-master/Client/LEVEL2/Level2.html';
  clearInterval(interval);
}

}


// This function is required to constantly check the functions, which is why the Date is also used to make it continue over
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
    collisionChecking(Enemynine);
    collisionChecking(Enemyten);
    collisionChecking(Enemyeleven);
    collisionChecking(Enemytwelve);
    collisionChecking(Enemythirteen);
    collisionCheckingPlayers(Playerone);
    collisionCheckingPlayersTwo(Playertwo);
    
    ll=new Date().getTime();
  }
  setTimeout('loop();' , 2);
}

// Functions to check if buttons are pressed
document.onkeydown = function(evt){
toggleKeyTwo(evt.keyCode , true);
};

document.onkeyup = function(evt){
toggleKeyTwo(evt.keyCode , false);
};



// Declaring all the objects on the page and positioning them and making their hitboxes correct
// Using the x,y, width and height of the elements.
var Playerone=DeclaringObjects('Playerone',430,460,65,100);
var Playertwo=DeclaringObjects('Playertwo',330,460,65,100);
var Enemyone=DeclaringObjects('Enemyone',1130,20,65,40);
var Enemytwo=DeclaringObjects('Enemytwo',970,20,65,40);  
var Enemythree=DeclaringObjects('Enemythree',810,-20,65,40);  
var Enemyfour=DeclaringObjects('Enemyfour',650,-20,65,40);  
var Enemyfive=DeclaringObjects('Enemyfive',490,20,65,40);  
var Enemysix=DeclaringObjects('Enemysix',330,20,65,40);    
var Enemyseven=DeclaringObjects('Enemyseven',170,20,65,40);
var Enemyeight=DeclaringObjects('Enemyeight',240,20,65,40);
var Enemynine=DeclaringObjects('Enemynine',400,20,65,40);
var Enemyten=DeclaringObjects('Enemyten',560,20,65,40);
var Enemyeleven=DeclaringObjects('Enemyeleven',720,20,65,40);
var Enemytwelve=DeclaringObjects('Enemytwelve',880,20,65,40);
var Enemythirteen=DeclaringObjects('Enemythirteen',1040,20,65,40);
var laser=DeclaringObjects('laser',0,-120,5,50);
var lasertwo=DeclaringObjects('lasertwo',0,-120,5,50);
var enemylaser=DeclaringObjects('enemylaser',1160,20,5,50);
var enemylaser2=DeclaringObjects('enemylaser2',1000,20,5,50);
var enemylaser3=DeclaringObjects('enemylaser3',850,20,5,50);
var enemylaser4=DeclaringObjects('enemylaser4',690,20,5,50);
var enemylaser5=DeclaringObjects('enemylaser5',530,20,5,50);
var enemylaser6=DeclaringObjects('enemylaser6',370,20,5,50);
var enemylaser7=DeclaringObjects('enemylaser7',230,20,5,50);
var enemylaser8=DeclaringObjects('enemylaser8',300,130,5,50);
var enemylaser9=DeclaringObjects('enemylaser9',460,20,5,50);
var enemylaser10=DeclaringObjects('enemylaser10',620,20,5,50);
var enemylaser11=DeclaringObjects('enemylaser11',780,20,5,50);
var enemylaser12=DeclaringObjects('enemylaser12',940,20,5,50);
var enemylaser13=DeclaringObjects('enemylaser13',1100,130,5,50);


     loop();
