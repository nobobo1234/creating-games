function setup() {
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
    noStroke();
    background("lavender");
    //noLoop();
}

function draw() {
    fill("wheat");
    rect(0, 0, width, 30);
    fill("black");
    text("mouseX:" + round(mouseX) + " mouseY:" + round(mouseY), 10, 20);
    fill("indianred");
    ellipse(mouseX, mouseY, 10);
}

// 56. Dit komt omdat anders de background niet opnieuw wordt getekend en anders de stip niet zal verdwijnen
