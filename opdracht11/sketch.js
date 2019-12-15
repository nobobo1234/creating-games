let horizontaalA = 120;
let verticaal = 170;
let horizontaalB = 500;

function setup() {
  createCanvas(1000,300);
  textFont("Verdana");
  textSize(30);
  stroke('white');
  strokeWeight(10);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  rect(0,0,width,40);
  fill('black');  
  text(`Positie A: ${horizontaalA}. Positie B: ${horizontaalB}`,10,30);
  fill('dodgerblue');
  ellipse(horizontaalA,verticaal,200);
  fill('darkred');
  ellipse(horizontaalB, verticaal, 200);
  horizontaalA += 2;
  horizontaalB++;
}

// 62. De cirkels gaan sneller bewegen