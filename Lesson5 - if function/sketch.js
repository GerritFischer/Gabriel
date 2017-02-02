var zahl = 0; // Variable die eine Zahl speichern soll die später durch text() ausgegeben wird

function setup() {
  createCanvas(400, 400);

}

function draw() {


  if(mouseIsPressed){                           //WENN maustaste gedrückt DANN zahl + 1 (draw wiederholt sich immer)
    zahl++;  // Abkürzung für zahl = zahl + 1
  }

  if(zahl > 200){                             //WENN zahl größer als 200 DANN background() SONST background(51)
    background(255, 0, 0);
  } else {
    background(51);
  }


    fill(255, 0, 255);
    textSize(32);
    text(zahl, 200, 200);   //Text, x, y,

}
