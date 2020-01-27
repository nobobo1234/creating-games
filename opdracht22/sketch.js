let kleur = "indianred";
let afstand;

function setup() {
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
    noStroke();
    frameRate(50);
}

function draw() {
    if (mouseX <= width / 2) {
        background("yellow");
    } else {
        background("white");
    }
    fill("black");

    mouseX = constrain(mouseX, 25, width - 25);
    mouseY = constrain(mouseY, 25, height - 25);

    text(
        "Beweeg de muis | x = " + round(mouseX) + " en y = " + round(mouseY),
        10,
        20
    );
    afstand = dist(mouseX, mouseY, width / 2, height / 2);

    if (
        mouseX >= width - 30 ||
        mouseX <= 30 ||
        mouseY >= height - 30 ||
        mouseY <= 30 ||
        afstand <= 80
    ) {
        kleur = "red";
    } else {
        kleur = "indianred";
    }

    ellipse(width / 2, height / 2, 100);
    tekenJos(mouseX, mouseY, kleur);
    text(`Afstand tot middenpunt bol: ${round(afstand)}`, 10, 40);
}

function tekenJos(x, y, kleur) {
    push();
    translate(x, y);
    scale(1);
    noStroke();
    fill(kleur);
    ellipse(0, 0, 50);
    fill("slategray");
    ellipse(-7, -10, 17);
    ellipse(7, -10, 17);
    fill("white");
    ellipse(-7, -8, 7, 13);
    ellipse(7, -8, 7, 13);
    fill("orange");
    ellipse(0, 3, 17);
    stroke("slategray");
    strokeWeight(3);
    fill("white");
    arc(0, 13, 26, 13, 0, PI, CHORD);
    pop();
}

// 119. De regels 15 en 16
// 120. Dat is de straal van JOS, de helft van zijn kleur
// 121. JOS moet 30 pixels bij de rand vandaan zijn om rood te worden
