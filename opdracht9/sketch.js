const letterGrootte = 30;
const marge = 20;

function setup() {
  createCanvas(1000,300);
  textFont("Verdana");
  textSize(letterGrootte);
  textLeading(1.2*letterGrootte);
  //noLoop();
}

function draw() {
  background('orange');
  fill('yellow');
  textAlign(LEFT, TOP);
  text("mouseX:" + round(mouseX) + "mouseY:" + round(mouseY),mouseX,mouseY);
  translate(50,50);
  fill('black');
  text("vensterGrootte:\n" + windowWidth + " x " + windowHeight,0,0);
  text("canvasGrootte:\n " + width + " x " + height,0,120);
  
  translate(500,0);
  fill('dodgerblue');
  stroke('white');
  strokeWeight(10);
  rect(0,0,400,200);

  translate(25,25);
  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  text("Deze tekst is erg lang en wordt daarom op meerdere regels weergegeven.",0,0,350,150);
}

// 48. Hij slaat het in windowHeight op.
// 49. Hij slaat het in height op.
// 50. Het blauwe tekstvak wordt eerder getekend.
// 51. De mouseY komt op de vorige regel terecht. De \n zorgt voor een nieuwe regel
// 53. textFont is het font zelf, textSize is de grootte van de text in pixels, textLeading is de spacing tussen de lijnen