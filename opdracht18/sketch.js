let xPositie = 0;
let yPositie = 30;
let schaal = 0.25;

function tekenSter(x, y, s) {
  push();
  scale(s);
  strokeWeight(2);
  stroke("white");
  fill("khaki");
  translate(x, y);
  triangle(0, 0, 80, 0, 40, 65);
  translate(0, 40);
  triangle(0, 0, 80, 0, 40, -65);
  pop();
}

function setup() {
  createCanvas(1000, 300);
  frameRate(15);
  colorMode(RGB, 255, 255, 255, 1);
  background(0, 0, 75, 1);
}

function draw() {
  background(0, 0, 75, 0.5);
  tekenSter(xPositie, yPositie, schaal);

  yPositie++;
  xPositie += 5;
  schaal += 0.05;
}

// 97. Dan zal de achtergrond nit meer hertekend worden waardoor de ster een spoor zal achterlaten
// 98. Dit komt doordat de achtergrond telkens weer hertekend wordt met een doorzichtigheid van 0.1 waardoor er een doorzichtig spoor achter de ster aangaat die langzaam verdwijnt als er meer 'achtergronden' overheen getekend worden.
