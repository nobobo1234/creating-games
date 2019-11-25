function setup() {
  createCanvas(450,450);
  background('cornflowerblue');
  noLoop();
}

function draw() {
  // Draw the ground
  noStroke();
  fill('wheat');
  rect(0,350,450,100);

  // Draw the house
  strokeWeight(4);
  stroke('darkgrey');
  fill('lightgray');
  rect(100,280,100,100);
  fill('gray');
  triangle(100,280,150,210,200,280);

  // teken de deur
  noStroke();
  rect(115,330,30,50);
  
  fill('khaki');
  ellipse(350, 100, 150);
  
  // teken de boom
  fill('sienna');
  rect(300,250,40,130);
  fill('olive');
  ellipse(320, 230, 100, 500/3);
}