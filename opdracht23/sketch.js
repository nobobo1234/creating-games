let x = 50;
let y = 50;

function setup() {
    createCanvas(1000, 400);
    textFont("Verdana");
    textSize(14);
    noStroke();
    frameRate(50);
}

function draw() {
    background("olive");

    if (keyIsDown(UP_ARROW)) {
        y -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
        y += 5;
    } else if (keyIsDown(LEFT_ARROW)) {
        x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
        x += 5;
    }

    y = constrain(y, 0, height - 100);
    x = constrain(x, 0, width - 100);

    if (y >= 75 && y <= 225 && x >= 700 && x <= 875) {
        fill("chartreuse");
    } else {
        fill("darkkhaki");
    }

    rect(800, 175, 75, 50);

    fill("moccasin");
    rect(x, y, 100, 100);
}

// 129. Naar boven en naar onder werken
// 130. Dat is de lengte van het blok
// 133. Het blokje staat op 175, dus als het blok op 175 (100 + 75) staat zal het overlappen met het kleine blokje. Hetzelfde kan je toepassen op de onderkant.
// 134. Omdat het blokje er precies tussen moet zitten, en niet onder de een of boven de ander. Hierdoor zal het blokje altijd groen zijn. Twee is altijd kleiner dan drie OF groter dan een
