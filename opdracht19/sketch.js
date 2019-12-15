var p = 100;

function setup() {
  createCanvas(450, 450);
  frameRate(50);
}

function draw() {
  background("snow");
  tekenRechthoek(p);
  tekenVierkant(p);
  tekenLijnen(p);
  p += 0.5;
  if (p > width) {
    noLoop();
  }
}

function tekenRechthoek(p) {
  push();
  strokeWeight(1);
  stroke("green");
  noFill();

  beginShape();
  vertex(p, 0);
  vertex(0, p);
  vertex(width - p, width);
  vertex(width, width - p);
  endShape(CLOSE);

  pop();
}

function tekenVierkant(p) {
  push();
  strokeWeight(1);
  stroke("red");
  noFill();

  beginShape();
  vertex(p, 0);
  vertex(0, width - p);
  vertex(width - p, width);
  vertex(width, p);
  endShape(CLOSE);

  pop();
}

function tekenLijnen(p) {
  push();
  strokeWeight(1);
  stroke("grey");
  line(0, p, width, p);
  line(0, height - p, width, height - p);
  pop();
}

// 104. Lijn 4 betekent dat als p hoger wordt dan de lengte of breedte van het canvas dat dan de draw functie moet stoppen
