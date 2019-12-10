let xJOS = 225;
let yJOS = 375;
// let speed = 17;

let speed;
let acc;

function setup() {
  speed = createVector(0, 60);
  acc = createVector(0, 9.81);
  createCanvas(450,450);
  textFont("Verdana");
  textSize(14);
  frameRate(30);
}

function draw() {
  background('lavender');
  fill('black');
 
  yJOS -= speed.y;

  xJOS=constrain(xJOS,75,width-75);
  yJOS=constrain(yJOS,75,height-75);
  text(`x = ${round(xJOS)} y = ${yJOS} speed = ${speed.y}`,10,20);
  
  translate(xJOS,yJOS);

  // in de volgende regels wordt JOS getekend

  push();
  scale(1);  
  noStroke();
  fill('indianred');
  ellipse(0,0,150);
  fill('slategray');
  ellipse(-20,-30,50);
  ellipse(20,-30,50);
  fill('white');
  ellipse(-20,-25,20,40);
  ellipse(20,-25,20,40);
  fill('orange');
  ellipse(0,10,50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS

  speed.y -= acc.y;

}

// 76. JOS blijft daar staan omdat de waarde geconstraind is
// 81. JOS zal eerst omhoog gaan door de snelheid die lager wordt. Vervolgens gaat hij omlaag door de negatieve snelheid. De snelheid blijft doorgaan omdat die niet constrained is.
