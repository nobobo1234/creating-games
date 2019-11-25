function setup() {
  createCanvas(450,450);
  background('white');
  noLoop();
  colorMode(RGB,255,255,255,1);  
}

function draw() {
  noStroke();
  fill(0,0,255,0.3);

//   fill('red');
  rect(0,150,450,150);

//   fill(0, 128, 0);
  rect(0,0,150,450);

//   fill(0, 0, 255);  
  rect(75,0,375,450);

  ellipse(450,225,450,450);

  triangle(225,0,450,225,225,450);
}

// 16. Hij komt niet op het scherm omdat e hem als eerste tekent voor de andere
// 21. De betekenis is de hoeveelheid transparantie die je meegeeft
// 22. Bij 0 zal die volledig transparant zijn en bij 1 volledig vast

