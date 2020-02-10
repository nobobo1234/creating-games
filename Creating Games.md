# Games maken en ervaren
Hieronder staan alle opdrachten
## Opdracht 1
**Opdracht 8**. Als je de twee ellipse() functies omwisselt zal de kleinere ellips eerder worden getekend dan de grotere waardoor de kleinere ellips onder
	de grotere ellips komt. Hierdoor zal je een volledig witte cirkel zien (als je de fill's niet mee omwisseld).
```js
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

	stroke(0, 128, 0);
	fill(255);
	strokeWeight(10);
	rect(125, 125, 200, 200);
}
```
## Opdracht 2
**Opdracht 10**. Het zijn respectievelijk de `(x,y)` coördinaten van de punten van de driehoek. Dus `triangle(x1,y1,x2,y2,x3,y3);`
**Opdracht 13**. Een vertex is de hoekpunt van een vorm
       CLOSE zorgt ervoor dat de vorm aan elkaar gemaakt wordt
```js
function setup() {
    createCanvas(900, 450);
    background("orange");
    noLoop();
}

function draw() {
    noStroke();
    fill("darkred");
    triangle(225, 0, 0, 450, 450, 450);

    fill("pink");
    triangle(450, 450, 0, 225, 450, 0);

    // Hier maak ik figuur 1.7 na
    fill("darkred");
    rect(450, 0, 450, 450);

    fill("pink");
    triangle(900, 0, 450, 225, 900, 450);

    fill("purple");
    triangle(450, 0, 900, 225, 450, 450);

    // Figuur tekst tekenen
    fill("white");
    textSize(16);
    text("Figuur 1.7", 455, 440);

    fill("white");
    textSize(16);
    text("Figuur 1.6", 5, 440);

    strokeWeight(5);
    stroke("pink");
    fill("darkred");
    beginShape();
    vertex(225, 115);
    vertex(300, 225);
    vertex(225, 335);
    vertex(0, 225);
    endShape(CLOSE);
}
```
## Opdracht 3
**Opdracht 16**. Hij komt niet op het scherm omdat e hem als eerste tekent voor de andere
**Opdracht 21**. De betekenis is de hoeveelheid transparantie die je meegeeft
**Opdracht 22**. Bij 0 zal die volledig transparant zijn en bij 1 volledig vast
```js
function setup() {
    createCanvas(450, 450);
    background("white");
    noLoop();
    colorMode(RGB, 255, 255, 255, 1);
}

function draw() {
    noStroke();
    fill(0, 0, 255, 0.3);

    //   fill('red');
    rect(0, 150, 450, 150);

    //   fill(0, 128, 0);
    rect(0, 0, 150, 450);

    //   fill(0, 0, 255);
    rect(75, 0, 375, 450);

    ellipse(450, 225, 450, 450);

    triangle(225, 0, 450, 225, 225, 450);
}
```
## Opdracht 4
```js
function setup() {
    createCanvas(450, 450);
    background("cornflowerblue");
    noLoop();
}

function draw() {
    // Draw the ground
    noStroke();
    fill("wheat");
    rect(0, 350, 450, 100);

    // Draw the house
    strokeWeight(4);
    stroke("darkgrey");
    fill("lightgray");
    rect(100, 280, 100, 100);
    fill("gray");
    triangle(100, 280, 150, 210, 200, 280);

    // teken de deur
    noStroke();
    rect(115, 330, 30, 50);

    fill("khaki");
    ellipse(350, 100, 150);

    // teken de boom
    fill("sienna");
    rect(300, 250, 40, 130);
    fill("olive");
    ellipse(320, 230, 100, 500 / 3);
}
```
## Opdracht 5
**Opdracht 28**. De betekenis van het minteken is dat die de andere kant op gaat. Het huis zal naar rechts verplaats worden
**Opdracht 29**. Ja mijn voorspelling klopte.
**Opdracht 29**. Nu is de boom weer op de originele plek omdat de translate ongedaan gemaakt wordt
```js
function setup() {
    var myCanvas = createCanvas(450, 450);
    background("cornflowerblue");
    noLoop();
}

function draw() {
    // teken de grond
    noStroke();
    fill("wheat");
    rect(0, 350, 450, 100);

    translate(90, -10);
    // begin teken het huis
    strokeWeight(4);
    stroke("darkgrey");
    fill("lightgray");
    rect(100, 280, 100, 100);
    fill("gray");
    triangle(100, 280, 200, 280, 150, 200);
    // teken de deur
    noStroke();
    rect(120, 330, 30, 50);
    // einde teken het huis
    translate(-90, 10);

    // teken de maan
    fill("khaki");
    ellipse(350, 100, 150, 150);
    // teken de boom
    fill("sienna");
    rect(300, 250, 40, 130);
    fill("olive");
    ellipse(320, 230, 100, 150);
}
```
## Opdracht 6
**Opdracht 36**. Dan zal ook het 5e vierkant cornsilk van kleur worden
```js
function setup() {
    createCanvas(900, 200);
    background("lavender");
    noLoop();
}

function draw() {
    noStroke();
    fill("thistle");
    translate(50, 50);
    rect(0, 0, 100, 100);

    translate(140, 0);
    rect(0, 0, 100, 100);
    translate(140, 0);
    rect(0, 0, 100, 100);

    translate(140, 0);
    // BEGIN aanpassing
    push();
    stroke("cornsilk");
    strokeWeight(20);
    fill("teal");
    translate(0, 40);
    rect(0, 0, 100, 100);
    // EINDE aanpassing
    pop();

    translate(140, 0);
    rect(0, 0, 100, 100);
    translate(140, 0);
    rect(0, 0, 100, 100);
}
```
## Opdracht 7
**Opdracht 38**. Hij is rond het linkerbovenpunt gedraaid, en hij is over 7*180/pi graden gedraaid
```js
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
```
## Opdracht 8a
Resultaat van 43 t/m 45
```js
const variabeleA = 21;
const variabeleB = 9;
let uitkomst;

function setup() {
    createCanvas(1000, 500);
    background("orange");
    textFont("Georgia");
    textSize(40);
    fill("white");
    noLoop();
}

function draw() {
    uitkomst = variabeleA - variabeleB;
    // Schrijf de rekensom op het scherm
    text(
        `De som ${variabeleA} - ${variabeleB} heeft als uitkomst: ${uitkomst}`,
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
```
## Opdracht 8b
Resultaat van opdracht 46
```js
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
```
## Opdracht 9
**Opdracht 48**. Hij slaat het in windowHeight op.
**Opdracht 49**. Hij slaat het in height op.
**Opdracht  50**. Het blauwe tekstvak wordt eerder getekend.
**Opdracht  51**. De mouseY komt op de vorige regel terecht. De \n zorgt voor een nieuwe regel
**Opdracht 53**. textFont is het font zelf, textSize is de grootte van de text in pixels, textLeading is de spacing tussen de lijnen
```js
const letterGrootte = 30;
const marge = 20;

function setup() {
    createCanvas(1000, 300);
    textFont("Verdana");
    textSize(letterGrootte);
    textLeading(1.2 * letterGrootte);
    //noLoop();
}

function draw() {
    background("orange");
    fill("yellow");
    textAlign(LEFT, TOP);
    text("mouseX:" + round(mouseX) + "mouseY:" + round(mouseY), mouseX, mouseY);
    translate(50, 50);
    fill("black");
    text("vensterGrootte:\n" + windowWidth + " x " + windowHeight, 0, 0);
    text("canvasGrootte:\n " + width + " x " + height, 0, 120);

    translate(500, 0);
    fill("dodgerblue");
    stroke("white");
    strokeWeight(10);
    rect(0, 0, 400, 200);

    translate(25, 25);
    noStroke();
    fill("white");
    textAlign(CENTER, CENTER);
    text(
        "Deze tekst is erg lang en wordt daarom op meerdere regels weergegeven.",
        0,
        0,
        350,
        150
    );
}
```
## Opdracht 10
**Opdracht 56**. Dit komt omdat anders de background niet opnieuw wordt getekend en anders de stip niet zal verdwijnen
```js
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
```
## Opdracht 11
**Opdracht 62**. De cirkels gaan sneller bewegen
```js
let horizontaalA = 120;
let verticaal = 170;
let horizontaalB = 500;

function setup() {
    createCanvas(1000, 300);
    textFont("Verdana");
    textSize(30);
    stroke("white");
    strokeWeight(10);
    frameRate(50);
}

function draw() {
    background("orange");
    fill("white");
    rect(0, 0, width, 40);
    fill("black");
    text(`Positie A: ${horizontaalA}. Positie B: ${horizontaalB}`, 10, 30);
    fill("dodgerblue");
    ellipse(horizontaalA, verticaal, 200);
    fill("darkred");
    ellipse(horizontaalB, verticaal, 200);
    horizontaalA += 2;
    horizontaalB++;
}
```
## Opdracht 12
**Opdracht 65**. Deze regel zorgt ervoor dat JOS elke frame 1 pixel naar links beweegt
```js
let xJOS = 350;
let yJOS = 350;

function setup() {
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
}

function draw() {
    background("lavender");
    fill("black");
    text("mouseX:" + round(mouseX) + " mouseY:" + round(mouseY), 10, 20);
    text("xJOS:" + xJOS + " yJOS:" + yJOS, 300, 20);
    translate(mouseX, mouseY);

    // in de volgende regels wordt JOS getekend

    push();
    noStroke();
    fill("indianred");
    ellipse(0, 0, 150);
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

    // Voor opdracht 64-67
    //   xJOS--;
    //   yJOS -= 2;
}
```
## Opdracht 13
**Opdracht 70**. In regel 27 kan je zien hoe groot JOS is.
**Opdracht 72**. JOS volgt de muis niet meer goed, maar hij is wel 50% kleiner geworden.
**Opdracht 73**. Nee want de radius van JOS is nog niet hetzelfde
```js
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
```
## Opdracht 14
 **Opdracht 76**. JOS blijft daar staan omdat de waarde geconstraind is
**Opdracht 81**. JOS zal eerst omhoog gaan door de snelheid die lager wordt. Vervolgens gaat hij omlaag door de negatieve snelheid. De snelheid blijft doorgaan omdat die niet constrained is.
```js
let xJOS = 225;
let yJOS = 375;
// let speed = 17;

let speed;
let acc;

function setup() {
    speed = createVector(0, 60);
    acc = createVector(0, 9.81);
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
    frameRate(30);
}

function draw() {
    background("lavender");
    fill("black");

    yJOS -= speed.y;

    xJOS = constrain(xJOS, 75, width - 75);
    yJOS = constrain(yJOS, 75, height - 75);
    text(`x = ${round(xJOS)} y = ${yJOS} speed = ${speed.y}`, 10, 20);

    translate(xJOS, yJOS);

    // in de volgende regels wordt JOS getekend

    push();
    scale(1);
    noStroke();
    fill("indianred");
    ellipse(0, 0, 150);
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

    speed.y -= acc.y;
}
```
## Opdracht 15
```js
let xJOS = 75;
let yJOS = 75;

function tekenJos(x, y) {
    push();
    translate(x, y);
    scale(1);
    noStroke();
    fill("indianred");
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

function setup() {
    createCanvas(450, 450);
    textFont("Verdana");
    textSize(14);
    frameRate(20);
    fill("black");
}

function draw() {
    background("lavender");
    text("x = " + round(xJOS), 10, 20);
    tekenJos(xJOS, yJOS);
    translate(0, 160);
    tekenJos(xJOS, yJOS);
    translate(0, 160);
    tekenJos(xJOS, yJOS);

    xJOS += 3;
    xJOS = constrain(xJOS, 0, width - 25);
}
```
## Opdracht 16
```js
const diameter = 300;
let blueCircleY;
let greenCircleY = 0;

function setup() {
    createCanvas(450, 450);
    blueCircleY = height;

    colorMode(RGB, 255, 255, 255, 1);
    noStroke();
}

function draw() {
    background(255, 255, 255, 1);

    fill(255, 0, 0, 0.5);
    ellipse(width / 2, height / 2, diameter);

    fill(0, 255, 0, 0.5);
    ellipse(width / 2, greenCircleY, diameter);

    fill(0, 0, 255, 0.5);
    ellipse(width / 2, blueCircleY, diameter);

    greenCircleY++;
    blueCircleY--;
}
```
## Opdracht 17
**Opdracht 92.** De eerste parameter geeft de x-coordinaat van de zon aan en het tweede coordinaat geeft de groote van de zon weer door hem te scalen
**Opdracht 93**. Ik verwacht een zon op x-coordinaat 500 en met een diameter van 300px
**Opdracht 94**. Ik verwacht een zon te zien de x-coordinaat van mijn muis volgt en die wordt gescaled als percentage van het y-coordinaat van mijn muis
```js
let schaal;

function tekenHuis() {
    push();
    strokeWeight(4);
    stroke("darkgrey");
    fill("lightgray");
    rect(100, 180, 100, 100);
    fill("gray");
    triangle(100, 180, 200, 180, 150, 100);
    noStroke();
    rect(120, 230, 30, 50);
    pop();
}

function tekenBoom(x) {
    push();
    noStroke();
    fill("sienna");
    rect(x, 130, 40, 130);
    fill("olive");
    ellipse(x + 20, 130, 100, 150);
    pop();
}

function tekenZon(x, s) {
    push();
    fill("red");
    scale(s);
    ellipse(x, 200, 300, 300);
    pop();
}

function setup() {
    createCanvas(1000, 300);
    noStroke();
}

function draw() {
    background("cornflowerblue");
    schaal = 1 + mouseY / height;

    tekenBoom(50);
    tekenBoom(150);
    tekenBoom(250);

    // teken de grond
    fill("wheat");
    rect(0, 250, width, height - 250);

    tekenHuis();

    tekenBoom(700);
    tekenBoom(900);

    tekenZon(mouseX, schaal);
}
```
## Opdracht 18
**Opdracht 97**. Dan zal de achtergrond nit meer hertekend worden waardoor de ster een spoor zal achterlaten
**Opdracht 98**. Dit komt doordat de achtergrond telkens weer hertekend wordt met een doorzichtigheid van 0.1 waardoor er een doorzichtig spoor achter de ster aangaat die langzaam verdwijnt als er meer 'achtergronden' overheen getekend worden.
```js
let xPositie = 0;
let yPositie = 30;
let schaal = 0.25;

function tekenSter(x, y, s) {
    push();
    scale(s);
    strokeWeight(2);
    stroke("white");
    fill("khaki");
    translate(x, y);
    triangle(0, 0, 80, 0, 40, 65);
    translate(0, 40);
    triangle(0, 0, 80, 0, 40, -65);
    pop();
}

function setup() {
    createCanvas(1000, 300);
    frameRate(15);
    colorMode(RGB, 255, 255, 255, 1);
    background(0, 0, 75, 1);
}

function draw() {
    background(0, 0, 75, 0.5);
    tekenSter(xPositie, yPositie, schaal);

    yPositie++;
    xPositie += 5;
    schaal += 0.05;
}
```
## Opdracht 19
**Opdracht 104.** Lijn 4 betekent dat als p hoger wordt dan de lengte of breedte van het canvas dat dan de draw functie moet stoppen
```js
var p = 100;

function setup() {
    createCanvas(450, 450);
    frameRate(50);
}

function draw() {
    background("snow");
    tekenRechthoek(p);
    tekenVierkant(p);
    tekenLijnen(p);
    p += 0.5;
    if (p > width) {
        noLoop();
    }
}

function tekenRechthoek(p) {
    push();
    strokeWeight(1);
    stroke("green");
    noFill();

    beginShape();
    vertex(p, 0);
    vertex(0, p);
    vertex(width - p, width);
    vertex(width, width - p);
    endShape(CLOSE);

    pop();
}

function tekenVierkant(p) {
    push();
    strokeWeight(1);
    stroke("red");
    noFill();

    beginShape();
    vertex(p, 0);
    vertex(0, width - p);
    vertex(width - p, width);
    vertex(width, p);
    endShape(CLOSE);

    pop();
}

function tekenLijnen(p) {
    push();
    strokeWeight(1);
    stroke("grey");
    line(0, p, width, p);
    line(0, height - p, width, height - p);
    pop();
}
```
## Opdracht 20
**Opdracht 107**. `if (keyisPressed == true)` betekent: 'Als het waar is dat een toets is ingedrukt'
**Opdracht 108**. Anders
**Opdracht 109**. Als de muisknop is ingedrukt in plaats van een toets op het toetsenbord
**Opdracht 110**. Dan draait JOS om en wordt die weer groter
```js
let zoomNiveau = 3;

function setup() {
    myCanvas = createCanvas(450, 450);
    textFont("Verdana");
    textSize(19);
    noStroke();
    frameRate(10);
}

function draw() {
    background("lavender");
    fill("white");
    rect(0, 0, width, 30);
    fill("black");
    text(
        "Druk op een toets | huidig zoomniveau: " + round(10 * zoomNiveau) / 10,
        5,
        20
    );
    if (mouseIsPressed == true) {
        zoomNiveau += 0.1;
    } else {
        zoomNiveau -= 0.1;
    }
    tekenJos(width / 2, height / 2, zoomNiveau);
}

function tekenJos(x, y, s) {
    push();
    translate(x, y);
    scale(s);
    noStroke();
    fill("indianred");
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
```
## Opdracht 21
**Opdracht 113**. 
A) Het balletje zal groen worden als de snelheid onder de vijf is,
B) Het balletje zal groen worden als de snelheid boven de vijf is
C) Het balletje zal groen worden als de snelheid boven of gelijk aan vijf is
**Opdracht 117**. Dan zal de bal rood zijn als er niemand klikt en de andere kleuren hebben als er wel iemand klikt, plus de diameters
```js
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
```
## Opdracht 22
**Opdracht 119**. De regels 15 en 16
**Opdracht 120**. Dat is de straal van JOS, de helft van zijn kleur
**Opdracht 121**. JOS moet 30 pixels bij de rand vandaan zijn om rood te worden
```js
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
```
## Opdracht 23
**Opdracht 129**. Naar boven en naar onder werken
** Opdracht 130**. Dat is de lengte van het blok
**Opdracht 133**. Het blokje staat op `175`, dus als het blok op `175` (`100 + 75`) staat zal het overlappen met het kleine blokje. Hetzelfde kan je toepassen op de onderkant.
**Opdracht 134**. Omdat het blokje er precies tussen moet zitten, en niet onder de een of boven de ander. Hierdoor zal het blokje altijd groen zijn. Twee is altijd kleiner dan drie OF groter dan een
```js
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
```
## Opdracht 24
**Opdracht 139**. Dit gebeurt omdat de oude waardes in de if check nog steeds gecodeerd zijn
```js
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
```
