var xJOS = 350;
var yJOS = 350;

function setup() {
  createCanvas(450,450);
  textFont("Verdana");
  textSize(14);
}

function draw() {
  background('lavender');
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:" + round(mouseY),10,20);
  text("xJOS:" + xJOS + " yJOS:" + yJOS,300,20);
  translate(mouseX,mouseY);
  
  // in de volgende regels wordt JOS getekend

  push();
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
  
  // Voor opdracht 64-67
  //   xJOS--;
  //   yJOS -= 2;
}

// 65. Deze regel zorgt ervoor dat JOS elke frame 1 pixel naar links beweegt