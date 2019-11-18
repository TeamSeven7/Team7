//key codes to control the player
const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const SPACE = 32;
// game canvas wdith and height 
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//adding the player width and max speed 
const PLAYER_WIDTH = 50;
const PLAYER_MAX_SPEED = 600.0;

//laser max speed and cooling down the speed
const LASER_MAX_SPEED = 300.0;
const LASER_COOLDOWN = 0.5;

//adding the enemies and padding it Horizontal and vertical - managing the spaces 
const ENEMIES_PER_ROW = 10;
const ENEMY_HORIZONTAL_PADDING = 80;
const ENEMY_VERTICAL_PADDING = 70;
const ENEMY_VERTICAL_SPACING = 80;
const ENEMY_COOLDOWN = 5.0;

const LASEROPS_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
};

var health=0;
var score=0;

function rectsIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  );
}

function setPosition(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`;
}
// we use this to stop the player from getting outside the game canvas
function clamp(v, min, max) {
  if (v < min) {
    return min;
  } else if (v > max) {
    return max;
  } else {
    return v;
  }
}

function rand(min, max) {
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
  setPosition($player, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
}

function destroyPlayer($container, player) {
  $container.removeChild(player);
  LASEROPS_STATE.gameOver = true;
  //const audio = new Audio("");
  //audio.play();
}

function updatePlayer(dt, $container) {
  if (LASEROPS_STATE.leftPressed) {
    LASEROPS_STATE.playerX -= dt * PLAYER_MAX_SPEED;
  }
  if (LASEROPS_STATE.rightPressed) {
    LASEROPS_STATE.playerX += dt * PLAYER_MAX_SPEED;
  }

  LASEROPS_STATE.playerX = clamp(
    LASEROPS_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  );

  if (LASEROPS_STATE.spacePressed && LASEROPS_STATE.playerCooldown <= 0) {
    createLaser($container, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
    LASEROPS_STATE.playerCooldown = LASER_COOLDOWN;
  }
  if (LASEROPS_STATE.playerCooldown > 0) {
    LASEROPS_STATE.playerCooldown -= dt;
  }

  const player = document.querySelector(".player");
  setPosition(player, LASEROPS_STATE.playerX, LASEROPS_STATE.playerY);
}

function createLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-blue-1.png";
  $element.className = "laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  LASEROPS_STATE.lasers.push(laser);
  //const audio = new Audio("");
  //audio.play();
  setPosition($element, x, y);
}

function updateLasers(dt, $container) {
  const lasers = LASEROPS_STATE.lasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y -= dt * LASER_MAX_SPEED;
    if (laser.y < 0) {
      destroyLaser($container, laser);
    }
    setPosition(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const enemies = LASEROPS_STATE.enemies;
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (enemy.isDead) continue;
      const r2 = enemy.$element.getBoundingClientRect();
      if (rectsIntersect(r1, r2)) {
        // Enemy was hit
        destroyEnemy($container, enemy);
        destroyLaser($container, laser);
        break;
      }
    }
  }
  LASEROPS_STATE.lasers = LASEROPS_STATE.lasers.filter(e => !e.isDead);
}

function destroyLaser($container, laser) {
  $container.removeChild(laser.$element);
  laser.isDead = true;
}

function createEnemy($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/eneime.png";
  $element.className = "enemy";
  $container.appendChild($element);
  const enemy = {
    x,
    y,
    cooldown: rand(0.5, ENEMY_COOLDOWN),
    $element
  };
  LASEROPS_STATE.enemies.push(enemy);
  setPosition($element, x, y);
}

function updateEnemies(dt, $container) {
  const dx = Math.sin(LASEROPS_STATE.lastTime / 1000.0) * 50;
  const dy = Math.cos(LASEROPS_STATE.lastTime / 1000.0) * 10;

  const enemies = LASEROPS_STATE.enemies;
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const x = enemy.x + dx;
    const y = enemy.y + dy;
    setPosition(enemy.$element, x, y);
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
  score += 50;
  document.getElementById('score').innerHTML = score;
  document.getElementById('total').innerHTML = score;
}

function createEnemyLaser($container, x, y) {
  const $element = document.createElement("img");
  $element.src = "img/laser-red-5.png";
  $element.className = "enemy-laser";
  $container.appendChild($element);
  const laser = { x, y, $element };
  LASEROPS_STATE.enemyLasers.push(laser);
  setPosition($element, x, y);
}

function updateEnemyLasers(dt, $container) {
  const lasers = LASEROPS_STATE.enemyLasers;
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i];
    laser.y += dt * LASER_MAX_SPEED;
    if (laser.y > GAME_HEIGHT) {
      destroyLaser($container, laser);
    }
    setPosition(laser.$element, laser.x, laser.y);
    const r1 = laser.$element.getBoundingClientRect();
    const player = document.querySelector(".player");
    const r2 = player.getBoundingClientRect();
    if (rectsIntersect(r1, r2)) {
      // Player was hit
      destroyPlayer($container, player);
      break;
      health -= 1;
      document.getElementById('health').innerHTML = health;
      destroyLaser($container, laser);
      if(health == 0){
        destroyPlayer($container, player);
        break;
      }
    }
  }
  LASEROPS_STATE.enemyLasers = LASEROPS_STATE.enemyLasers.filter(e => !e.isDead);
}

function init() {
  health = 5;
  score = 0;
  document.getElementById('health').innerHTML = health;
  document.getElementById('score').innerHTML = score;
  const $container = document.querySelector(".game");
  createPlayer($container);

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

  if (LASEROPS_STATE.gameOver) {
    document.querySelector(".game-over").style.display = "block";
    return;
  }

  if (playerHasWon()) {
    document.querySelector(".congratulations").style.display = "block";
    return;
  }

  const $container = document.querySelector(".game");
  updatePlayer(dt, $container);
  updateLasers(dt, $container);
  updateEnemies(dt, $container);
  updateEnemyLasers(dt, $container);

  LASEROPS_STATE.lastTime = currentTime;
  window.requestAnimationFrame(update);
}

function onKeyDown(e) {
  if (e.keyCode === KEYCODE_LEFT) {
    LASEROPS_STATE.leftPressed = true;
  } else if (e.keyCode === KEYCODE_RIGHT) {
    LASEROPS_STATE.rightPressed = true;
  } else if (e.keyCode === SPACE) {
    LASEROPS_STATE.spacePressed = true;
  }
}

function onKeyUp(e) {
  if (e.keyCode === KEYCODE_LEFT) {
    LASEROPS_STATE.leftPressed = false;
  } else if (e.keyCode === KEYCODE_RIGHT) {
    LASEROPS_STATE.rightPressed = false;
  } else if (e.keyCode === SPACE) {
    LASEROPS_STATE.spacePressed = false;
  }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);
