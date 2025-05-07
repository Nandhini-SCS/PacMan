const pacMen = []; // This array holds all the PacMan objects

// Random position or velocity generator
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Create a new PacMan image at random position
function makePac() {
  let velocity = setToRandom(10);
  let position = setToRandom(200);

  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.src = 'PacMan.jpg'; 
  newimg.style.width = '100px';
  newimg.style.position = 'absolute';
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';

  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });

  setTimeout(update, 20);
}

function checkCollisions(item) {
  const game = document.getElementById('game');
  const gameWidth = game.offsetWidth;
  const gameHeight = game.offsetHeight;
  const imgWidth = item.newimg.width;
  const imgHeight = item.newimg.height;

  if (item.position.x + imgWidth >= gameWidth || item.position.x <= 0) {
    item.velocity.x = -item.velocity.x;
  }
  if (item.position.y + imgHeight >= gameHeight || item.position.y <= 0) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac());
}
