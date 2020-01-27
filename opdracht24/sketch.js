let xJager = 50;
let yJager = 50;
let xProoi = 800;
let yProoi = 175;

function setup() {
    createCanvas(1000, 400);
    textFont("Verdana");
    textSize(140);
    noStroke();
    frameRate(50);
}

function draw() {
    background("olive");

    if (keyIsDown(LEFT_ARROW)) {
        xJager -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xJager += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        yJager -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yJager += 5;
    }

    if (keyIsDown(65)) {
        xProoi -= 5;
    } else if (keyIsDown(68)) {
        xProoi += 5;
    } else if (keyIsDown(83)) {
        yProoi += 5;
    } else if (keyIsDown(87)) {
        yProoi -= 5;
    }

    xJager = constrain(xJager, 0, width - 100);
    yJager = constrain(yJager, 0, height - 100);
    xProoi = constrain(xProoi, 0, width - 75);
    yProoi = constrain(yProoi, 0, height - 50);

    if (xJager + 100 >= xProoi && xJager <= xProoi + 75 && yJager + 100 >= yProoi && yJager <= yProoi + 50) {
        fill("chartreuse");
        eindScherm();
    } else {
        fill("darkkhaki");
    }
    rect(xProoi, yProoi, 75, 50);
    fill("moccasin");
    rect(xJager, yJager, 100, 100);
}

function eindScherm() {
    background("white");
    fill("black");
    text("GEVANGEN!", 75, 250);
    noLoop();
}

// 139. Dit gebeurt omdat de oude waardes in de if check nog steeds gecodeerd zijn
