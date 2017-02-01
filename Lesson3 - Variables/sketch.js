var x = 0;
var y = 200;
var width1 = 50;
var height1 = 50;
var text = "Wurstbrot"; //<-- Variablen können auch Text enthalten.


function setup() {
  createCanvas(400, 400);

}
//-------------------------------------------// The draw() function wiederholt sich
function draw() {                            // jeden Frame, also 30 mal pro Sekunde.
  background(51);                            // Daher wird jede Sekunde ein Kreis
  ellipse(x, y, height1, width1);            // gezeichnet, der die x position "x"
  x = x + 1;                                 // hat. Dieser Wert liegt zu begin
}                                            // bei 0 (Z.1 var x = 0;). Nach jeden
//-------------------------------------------// Frame nimmt x (0) den Wert x(0) + 1
                                             // also in diesem Fall 0 + 1 an. Im
                                             // nächsten Frame hat x dann den Wert
                                             // 1 und die Rechnung x(1) = x(1) + 1
                                             // erfolgt erneut. Da der Kreis jeden
                                             // Frame neu gezeichnet wird bewegt sich
                                             // der Kreis in jedem Frame um 1 nach rechts.
