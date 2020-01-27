let x = 120;
let snelheid = 5;
let diameter = 200;

function setup() {
    createCanvas(1000, 300);
    textFont("Verdana");
    textSize(30);
    frameRate(50);
}

function draw() {
    background("orange");
    fill("white");
    noStroke();
    rect(0, 0, width, 40);
    fill("black");
    text(
        "De bol beweegt heen en weer (snelheid = " +
            snelheid +
            "). | Klik met je muis!",
        10,
        30
    );
    stroke("white");
    strokeWeight(10);

    if (snelheid === 5) {
        fill("green");
    } else if (snelheid === -5) {
        fill("dodgerblue");
    }
    if (mouseIsPressed == true) {
        diameter = 100;
        fill("red");
    } else {
        diameter = 200;
    }

    if (x > 1000 - 0.5 * diameter - 10) {
        snelheid = -1 * snelheid;
    } else if (x < 0.5 * diameter + 10) {
        snelheid = -1 * snelheid;
    }

    x += snelheid;
    ellipse(x, 170, diameter);
}

// 113. A) Het balletje zal groen worden als de snelheid onder de vijf is,
//      B) Het balletje zal groen worden als de snelheid boven de vijf is
//      C) Het balletje zal groen worden als de snelheid boven of gelijk aan vijf is
// 117. Dan zal de bal rood zijn als er niemand klikt en de andere kleuren hebben als er wel iemand klikt, plus de diameters
