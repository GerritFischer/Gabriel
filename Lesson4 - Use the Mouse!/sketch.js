function setup() {
  createCanvas(400, 400);
  background(51); //<-- background steht im setup, damit die Kreise nicht überschrieben werden.
}

function draw() {
  //Kein draw da wir nichts wiederholen müssen
}

function mousePressed() {   // Wird ausgeführ wenn die Maus gedrückt wird
  ellipse(mouseX, mouseY, 50, 50);
  //mouseX und mouseY geben die aktuelle Position des Cursors auf dem Canvas an

}
