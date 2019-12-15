const diameter = 300;
let blueCircleY;
let greenCircleY = 0;

function setup() {
  createCanvas(450,450);
  blueCircleY = height;

  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
}

function draw() {
  background(255,255,255,1);

  fill(255,0,0,0.5);
  ellipse(width / 2, height / 2,diameter);

  fill(0, 255, 0, 0.5);
  ellipse(width / 2, greenCircleY, diameter);

  fill(0, 0, 255, 0.5);
  ellipse(width / 2, blueCircleY, diameter);

  greenCircleY++;
  blueCircleY--;
}