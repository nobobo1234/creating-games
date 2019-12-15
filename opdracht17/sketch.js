var schaal;

function tekenHuis() {
  push();
  strokeWeight(4);
  stroke("darkgrey");
  fill("lightgray");
  rect(100, 180, 100, 100);
  fill("gray");
  triangle(100, 180, 200, 180, 150, 100);
  noStroke();
  rect(120, 230, 30, 50);
  pop();
}

function tekenBoom(x) {
  push();
  noStroke();
  fill("sienna");
  rect(x, 130, 40, 130);
  fill("olive");
  ellipse(x + 20, 130, 100, 150);
  pop();
}

function tekenZon(x, s) {
  push();
  fill("red");
  scale(s);
  ellipse(x, 200, 300, 300);
  pop();
}

function setup() {
  createCanvas(1000, 300);
  noStroke();
}

function draw() {
  background("cornflowerblue");
  schaal = 1 + mouseY / height;

  tekenBoom(50);
  tekenBoom(150);
  tekenBoom(250);

  // teken de grond
  fill("wheat");
  rect(0, 250, width, height - 250);

  tekenHuis();

  tekenBoom(700);
  tekenBoom(900);

  tekenZon(mouseX, schaal);
}

// 92. De eerste parameter geeft de x-coordinaat van de zon aan en het tweede coordinaat geeft de groote van de zon weer door hem te scalen
// 93. Ik verwacht een zon op x-coordinaat 500 en met een diameter van 300px
// 94. Ik verwacht een zon te zien de x-coordinaat van mijn muis volgt en die wordt gescaled als percentage van het y-coordinaat van mijn muis
