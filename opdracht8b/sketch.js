const variabeleA = 13;
const variabeleB = 4;
let uitkomst;

function setup() {
    createCanvas(1000, 650);
    background("orange");
    textFont("Georgia");
    textSize(40);
    fill("white");
    noLoop();
}

function draw() {
    uitkomst = variabeleA * variabeleB;
    // Schrijf de rekensom op het scherm
    text(
        `De som ${variabeleA} x ${variabeleB} heeft als uitkomst: ${uitkomst}`,
        50,
        50
    );

    translate(50, 100);
    fill("dodgerblue");
    stroke("white");
    strokeWeight(10);
    // De vierkanten krijgen als zijde de waarde die in variabeleA en variabeleB staan.

    rect(0, 0, 10 * variabeleA, 10 * variabeleA);
    translate(10 * variabeleA + 50, 0);
    rect(0, 0, 10 * variabeleB, 10 * variabeleB);
    translate(10 * variabeleB + 150, 0);
    rect(0, 0, 10 * uitkomst, 10 * uitkomst);
}
