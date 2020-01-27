function setup() {
    createCanvas(450, 450);
    background(127);
    noLoop();
}

function draw() {
    const radius = 200;

    noStroke();
    fill("green");
    ellipse(radius + 25, radius + 25, 2 * radius);

    const radius2 = 150;
    fill(255);
    noStroke(0);
    ellipse(radius + 25, radius + 25, 2 * radius2);

    /* 
  Als je de twee ellipse() functies omwisselt zal de kleinere ellips eerder worden getekend dan de grotere waardoor de kleinere ellips onder
  de grotere ellips komt. Hierdoor zal je een volledig witte cirkel zien (als je de fill's niet mee omwisseld).
  */

    stroke(0, 128, 0);
    fill(255);
    strokeWeight(10);
    rect(125, 125, 200, 200);
}
