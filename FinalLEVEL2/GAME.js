//key codes to control the playerone

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const ENTER = 13;

//key codes to control the playertwo

const KEYCODE_A = 65;
const KEYCODE_D = 68;
const SPACE =32;


// game canvas wdith and height 

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//adding the player width and max speed 
const PLAYER_WIDTH = 50;
const PLAYER_MAX_SPEED = 600.0;
const PLAYER2_WIDTH = 50;
const PLAYER2_MAX_SPEED = 600.0;

//adding the player width and max speed 


//laser max speed and cooling down the speed
const LASER_MAX_SPEED = 300.0;
const LASER_COOLDOWN = 0.5;
const LASER2_MAX_SPEED = 300.0;
const LASER2_COOLDOWN = 0.5;

//adding the enemies and padding it Horizontal and vertical - managing the spaces 
const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const ENEMY_COOLDOWN = 5.0;

//game state 
const LASEROPS_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  enterPressed: false,
  aPressed: false,
  dPressed: false,
  spacePressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  player2X: 0,
  player2Y: 0,
  player2Cooldown: 0,
  lasers: [],
  lasers2: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
};

//health and scores 
var health=100;
var score=0;
var healthtwo=100;
var scoretwo=0;

function rIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

function setMove(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}

// we use this to stop the player from getting outside the game canvas
function keepPlayersincanvas(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

//display enieme arrangment 
function eniemesrand(min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = 1;
  return min + Math.random() * (max - min);
}

function createPlayer($container) {
  LASEROPS_STATE.playerX = GAME_WIDTH / 2;
  LASEROPS_STATE.playerY = GAME_HEIGHT - 50;
  const $player = document.createElement("img");
  $player.src = "img/playertwo.png";
  $player.className = "player";
  $container.appendChild($player);
  setMove($player, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
}

function createPlayerTwo($container) {
  LASEROPS_STATE.player2X = GAME_WIDTH / 2;
  LASEROPS_STATE.player2Y = GAME_HEIGHT - 50;
  const $player2 = document.createElement("img");
  $player2.src = "img/player1.png";
  $player2.className = "player2";
  $container.appendChild($player2);
  setMove($player2, LASEROPS_STATE.player2X, LASEROPS_STATE.player2Y);
}

function destroyPlayer($container, player) {
  $container.removeChild(player);
  document.querySelector(".congratulationstwo").style.display = "block";

}

function destroyPlayerTwo($container, player2) {
  $container.removeChild(player2);
  document.querySelector(".congratulations").style.display = "block";

}

function updatePlayer(dt, $container) {
  if (LASEROPS_STATE.leftPressed) {
    LASEROPS_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (LASEROPS_STATE.rightPressed) {
    LASEROPS_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  LASEROPS_STATE.playerX = keepPlayersincanvas(
    LASEROPS_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  );

  if (LASEROPS_STATE.enterPressed && LASEROPS_STATE.playerCooldown <= 0) {
    createLaser($container, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
    LASEROPS_STATE.playerCooldown = LASER_COOLDOWN;
  }
  if (LASEROPS_STATE.playerCooldown > 0) {
    LASEROPS_STATE.playerCooldown -= dt;
  }

  const player = document.querySelector(".player");
  setMove(player, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
}

function updatePlayerTwo(dt, $container) {
  if (LASEROPS_STATE.aPressed) {
    LASEROPS_STATE.player2X -= dt * PLAYER2_MAX_SPEED;
  }
  if (LASEROPS_STATE.dPressed) {
    LASEROPS_STATE.player2X += dt * PLAYER2_MAX_SPEED;
  }

  LASEROPS_STATE.player2X = keepPlayersincanvas(
    LASEROPS_STATE.player2X,
    PLAYER2_WIDTH,
    GAME_WIDTH - PLAYER2_WIDTH
  );

  if (LASEROPS_STATE.spacePressed && LASEROPS_STATE.player2Cooldown <= 0) {
    createLaserTwo($container, LASEROPS_STATE.player2X, LASEROPS_STATE.player2Y);
    LASEROPS_STATE.player2Cooldown = LASER2_COOLDOWN;
  }
  if (LASEROPS_STATE.player2Cooldown > 0) {
    LASEROPS_STATE.player2Cooldown -= dt;
  }

  const player2 = document.querySelector(".player2");
  setMove(player2, LASEROPS_STATE.player2X, LASEROPS_STATE.player2Y);
}

function createLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-blue-1.png";
  $element.className = "laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  LASEROPS_STATE.lasers.push(laser);
  setMove($element, x, y);
}

function createLaserTwo($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-green-11.png";
  $element.className = "laser2";
  $container.appendChild($element);
  const laser2 = { x, y, $element };
  LASEROPS_STATE.lasers2.push(laser2);
  setMove($element, x, y);
}

function updateLasers(dt, $container) {
  const lasers = LASEROPS_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;
    if (laser.y < 0) {
      destroyLaser($container, laser);
    }
    setMove(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const enemies = LASEROPS_STATE.enemies;
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const r2 = enemy.$element.getBoundingClientRect();
      if (rIntersect(r1, r2)) {
        // Enemy was hit
        
        destroyEnemy($container, enemy);
        destroyLaser($container, laser);
        score += 100;
        document.getElementById('score').innerHTML = score;
        document.getElementById('total').innerHTML = score;
        break;
      }
    }
  }
  LASEROPS_STATE.lasers = LASEROPS_STATE.lasers.filter(e => !e.isDead);
}

function updateLasersTwo(dt, $container) {
  const lasers2 = LASEROPS_STATE.lasers2;
  for (let i = 0; i < lasers2.length; i++) {
    const laser2 = lasers2[i];
    laser2.y -= dt * LASER2_MAX_SPEED;
    if (laser2.y < 0) {
      destroyLaser($container, laser2);
    }
    setMove(laser2.$element, laser2.x, laser2.y);
    const s1 = laser2.$element.getBoundingClientRect();
    const enemies = LASEROPS_STATE.enemies;
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const s2 = enemy.$element.getBoundingClientRect();
      if (rIntersect(s1, s2)) {
        // Enemy was hit
        destroyEnemytwo($container, enemy);
        destroyLaserTwo($container, laser2);
        scoretwo += 100;
        document.getElementById('scoretwo').innerHTML = scoretwo;
        document.getElementById('totaltwo').innerHTML = scoretwo;
        break;
      }
    }
  }
  LASEROPS_STATE.lasers2 = LASEROPS_STATE.lasers2.filter(e => !e.isDead);
}

function destroyLaser($container, laser) {
  $container.removeChild(laser.$element);
  laser.isDead = true;
}

function destroyLaserTwo($container, laser2) {
  $container.removeChild(laser2.$element);
  laser2.isDead = true;
}

function createEnemy($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/eneime.png";
  $element.className = "enemy";
  $container.appendChild($element);
  const enemy = {
    x,
    y,
    cooldown: eniemesrand(0.5, ENEMY_COOLDOWN),
    $element
  };
  LASEROPS_STATE.enemies.push(enemy);
  setMove($element, x, y);
}

function updateEnemies(dt, $container) {
  const dx = Math.sin(LASEROPS_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(LASEROPS_STATE.lastTime / 1000.0) * 10;

  const enemies = LASEROPS_STATE.enemies;
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setMove(enemy.$element, x, y);
    enemy.cooldown -= dt;
    if (enemy.cooldown <= 0) {
      createEnemyLaser($container, x, y);
      enemy.cooldown = ENEMY_COOLDOWN;
    }
  }
  LASEROPS_STATE.enemies = LASEROPS_STATE.enemies.filter(e => !e.isDead);
}

function destroyEnemy($container, enemy) {
  $container.removeChild(enemy.$element);
  enemy.isDead = true;
}



function destroyEnemytwo($container, enemy) {
  $container.removeChild(enemy.$element);
  enemy.isDead = true;
  
}


function createEnemyLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-red-5.png";
  $element.className = "enemy-laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  LASEROPS_STATE.enemyLasers.push(laser);
  setMove($element, x, y);
}

function updateEnemyLasers(dt, $container) {
  const lasers = LASEROPS_STATE.enemyLasers;
  const player = document.querySelector(".player");
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * LASER_MAX_SPEED;
    if (laser.y > GAME_HEIGHT) {
      destroyLaser($container, laser);
    }
    setMove(laser.$element, laser.x, laser.y, player);
    const r1 = laser.$element.getBoundingClientRect();
    
    const r2 = player.getBoundingClientRect();
    if (rIntersect(r1, r2)) {
      // Player was hit

      health -= 10;
      document.getElementById('health').innerHTML = health;
      destroyLaser($container, laser);
      if(health == 0){
       document.querySelector(".congratulationstwo").style.display = "block";
        destroyPlayer($container, player);
        break;
      }
    }
  }
  LASEROPS_STATE.enemyLasers = LASEROPS_STATE.enemyLasers.filter(e => !e.isDead);
}

function updateEnemyLasersTwo(dt, $container) {
  const lasers2 = LASEROPS_STATE.enemyLasers;
  const player2 = document.querySelector(".player2");
  for (let i = 0; i < lasers2.length; i++) {
    const laser2 = lasers2[i];
    laser2.y += dt * LASER_MAX_SPEED;
    if (laser2.y > GAME_HEIGHT) {
      destroyLaserTwo($container, laser2);
    }
    setMove(laser2.$element, laser2.x, laser2.y, player2);
    const s1 = laser2.$element.getBoundingClientRect();
    
    const s2 = player2.getBoundingClientRect();
    if (rIntersect(s1, s2)) {
      // Player was hit
      healthtwo -= 10;
      document.getElementById('healthtwo').innerHTML = healthtwo;
      destroyLaser($container, laser2);
      if(healthtwo == 0){
       document.querySelector(".congratulations").style.display = "block";
        destroyPlayerTwo($container, player2);
        break;
      }
    }
  }
  LASEROPS_STATE.enemyLasers = LASEROPS_STATE.enemyLasers.filter(e => !e.isDead);
}

function init() {

  document.getElementById('health').innerHTML = health;
  document.getElementById('score').innerHTML = score;
  document.getElementById('healthtwo').innerHTML = healthtwo;
  document.getElementById('scoretwo').innerHTML = scoretwo;
  const $container = document.querySelector(".game");
  createPlayer($container);
  createPlayerTwo($container);

  const enemySpacing =
    (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1);
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING;
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING;
      createEnemy($container, x, y);
    }
  }
}

function playerHasWon() {
  return LASEROPS_STATE.enemies.length === 0;
}

function update(e) {
  const currentTime = Date.now();
  const dt = (currentTime - LASEROPS_STATE.lastTime) / 1000.0;
  if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";


    return;
  }



  

  const $container = document.querySelector(".game");
  updatePlayer(dt, $container);
  updatePlayerTwo(dt, $container);
  updateLasers(dt, $container);
  updateLasersTwo(dt, $container);
  updateEnemies(dt, $container);
  updateEnemyLasers(dt, $container);
  updateEnemyLasersTwo(dt, $container);

  LASEROPS_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

function onKeyDown(e) {
  if (e.keyCode === KEYCODE_LEFT) {
    LASEROPS_STATE.leftPressed = true;
  } else if (e.keyCode === KEYCODE_RIGHT) {
    LASEROPS_STATE.rightPressed = true;
  } else if (e.keyCode === ENTER) {
    LASEROPS_STATE.enterPressed = true;
  } else if (e.keyCode === KEYCODE_A) {
    LASEROPS_STATE.aPressed = true;
  } else if (e.keyCode === KEYCODE_D) {
    LASEROPS_STATE.dPressed = true;
  } else if (e.keyCode === SPACE) {
    LASEROPS_STATE.spacePressed = true;
  }
}

function onKeyUp(e) {
  if (e.keyCode === KEYCODE_LEFT) {
    LASEROPS_STATE.leftPressed = false;
  } else if (e.keyCode === KEYCODE_RIGHT) {
    LASEROPS_STATE.rightPressed = false;
  } else if (e.keyCode === ENTER) {
    LASEROPS_STATE.enterPressed = false;
  } else if (e.keyCode === KEYCODE_A) {
    LASEROPS_STATE.aPressed = false;
  } else if (e.keyCode === KEYCODE_D) {
    LASEROPS_STATE.dPressed = false;
  } else if (e.keyCode === SPACE) {
    LASEROPS_STATE.spacePressed = false;
  }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);
