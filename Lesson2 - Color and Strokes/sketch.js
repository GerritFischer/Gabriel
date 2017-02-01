function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);


  fill(255, 0, 0); //Fülle die Nachfolgenden Formen mit Rot
  stroke(0, 0, 255); //Gebe ihnen einen Blauen Rahmen
  strokeWeight(5); //Setze den Rahmen auf 5 px
  rect(100, 100, 50, 50);

  //fill und stroke bleiben solange aktiv bis sie verändert werden

  fill(0, 255, 0, 100); //<-- Letzer Wert: Transparenz 0-255, Geht bei jedem RGB
  noStroke() //Kein Rahmen
  rect(200, 100, 50, 50);

  //fill und stroke bleiben solange aktiv bis sie verändert werden

  noFill(); //Keine Füllung
  stroke(255, 0, 255);
  strokeWeight(2);
  rect(100, 200, 50, 50);

  //fill und stroke bleiben solange aktiv bis sie verändert werden


}
