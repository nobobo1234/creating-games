let xJOS;
let yJOS;
let rJOS = 150;

function setup() {
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
}

function draw() {
    background("lavender");
    fill("black");
    text("xJOS: " + round(xJOS) + " (mouseX:" + round(mouseX) + ")", 10, 20);
    text("yJOS: " + round(yJOS) + " (mouseY:" + round(mouseY) + ")", 260, 20);

    // Voor 73
    //   xJOS = constrain(mouseX, rJOS/2, width-rJOS/2);
    //   yJOS = constrain(mouseY, rJOS/2, height-rJOS/2)
    // Na 73, accounting for scaling
    xJOS = constrain(mouseX, rJOS / 4, width - rJOS / 4);
    yJOS = constrain(mouseY, rJOS / 4, width - rJOS / 4);

    translate(xJOS, yJOS);

    // in de volgende regels wordt JOS getekend

    push();
    scale(0.5);
    noStroke();
    fill("indianred");
    ellipse(0, 0, rJOS);
    fill("slategray");
    ellipse(-20, -30, 50);
    ellipse(20, -30, 50);
    fill("white");
    ellipse(-20, -25, 20, 40);
    ellipse(20, -25, 20, 40);
    fill("orange");
    ellipse(0, 10, 50);
    stroke("slategray");
    strokeWeight(10);
    fill("white");
    arc(0, 40, 80, 40, 0, PI, CHORD);
    pop();
    // einde tekenen JOS
}

// 70. In regel 27 kan je zien hoe groot JOS is.
// 72. JOS volgt de muis niet meer goed, maar hij is wel 50% kleiner geworden.
// 73. Nee want de radius van JOS is nog niet hetzelfde
