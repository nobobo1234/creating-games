function setup() {
    createCanvas(450, 450);
    background("lavender");
    noLoop();
    colorMode(RGB, 255, 255, 255, 1);
    fill(178, 34, 34, 0.5);
    angleMode(DEGREES);
    rectMode(CENTER);
}

function draw() {
    noStroke();
    translate(width / 2, height / 2);
    rect(0, 0, 200, 200);

    push();
    rotate(45);
    rect(0, 0, 200, 200);
    pop();

    fill(255, 255, 0);
    rect(0, 0, 50, 50);
}

// 38. Hij is rond het linkerbovenpunt gedraaid, en hij is over 7*180/pi graden gedraaid
