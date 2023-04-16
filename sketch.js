const radius = 50;
let x, y;
let r, g, b;
let score = 0;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  y =random(400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0);
  fill(r,g,b);
  noStroke();
  ellipse(x,y, radius*2, radius*2);
  text("Score: " + score, 10, 20);
}

function mousePressed(){
  let d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    x = random(400);
    y = random(400);
    r = random(255);
    g = random(255);
    b = random(255);
    score++;
  }
  
}