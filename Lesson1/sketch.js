function setup(){          // Läuft zum Start einmal
  createCanvas(400, 400);  //Erstellt Oberfläche
//          Breite   Höhe  px
}
function draw(){     //Wiederholt sich jeden Frame
  background(51); //Setzt hintergrund im RGB 51,51,51
  ellipse(200, 200, 50, 50);
        //Kreis
        //x     y    x   y
        // Position   Größe
  rect(100, 200, 40, 80);
      //Rechteck
      //x     y    x   y
      // Position   Größe
  line(300, 50, 300, 200);
    // Linie
    // x    y  x    y
    //Point 1  Point 2
  point(20,20);
    //Punkt (sehr klein :D)
    //  x  y
    //Position
  quad(38, 31, 86, 20, 69, 63, 30, 76);
    // VIERECK!!!
    //x     y   x   y   x   y   x   y
    // Du kannst es dir denken oder..4 Punkte :D
  triangle(170, 75, 198, 20, 226, 75);
    // DREIECK!!!
    //      x    y   x    y ... warum mach ich das überhaupt
    // du hast es eh verstanden xD
}
