function setup() {
    createCanvas(900, 450);
    background("cornflowerblue");
    noLoop();
}

function draw() {
    noStroke();
    fill("tan");
    // Draw rectangle without translate
    rect(0, 0, 400, 400);
    // Draw rect with translate
    push();
    translate(475, 25);
    rect(0, 0, 400, 400);
    pop();

    fill("peru");
    // Draw rect without translate
    rect(0, 0, 150, 150);
    // Draw rect with translate
    push();
    translate(650, 50);
    rect(0, 0, 150, 150);
    pop();
    // Draw text for rectangle 1
    fill(255);
    text("Zonder translate", 5, 440);
    text("Met translate", 455, 440);

    // Draw division line
    stroke(0);
    strokeWeight(1);
    line(450, 0, 450, 450);
}
