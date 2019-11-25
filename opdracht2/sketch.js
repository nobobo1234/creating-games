function setup() {
  createCanvas(900,450);
  background('orange');
  noLoop();
}

function draw() {
  noStroke();
  fill('darkred');
  /* 10. Het zijn respectievelijk de (x,y) coördinaten van de punten van de driehoek. Dus triangle(x1,y1,x2,y2,x3,y3); */
  triangle(225, 0, 0, 450, 450, 450);

  fill('pink');
  triangle(450, 450, 0, 225, 450, 0);

  // Hier maak ik figuur 1.7 na
  fill('darkred');
  rect(450, 0, 450, 450);

  fill('pink');
  triangle(900, 0, 450, 225, 900, 450);

  fill('purple');
  triangle(450, 0, 900, 225, 450, 450);

  // Figuur tekst tekenen
  fill('white');
  textSize(16);
  text('Figuur 1.7', 455, 440);

  fill('white');
  textSize(16);
  text('Figuur 1.6', 5, 440);

  // 13. Een vertex is de hoekpunt van een vorm
  //     CLOSE zorgt ervoor dat de vorm aan elkaar gemaakt wordt

  strokeWeight(5);
  stroke('pink');
  fill('darkred');
  beginShape();
  vertex(225,115);
  vertex(300,225);
  vertex(225,335);
  vertex(0,225);
  endShape(CLOSE);
}