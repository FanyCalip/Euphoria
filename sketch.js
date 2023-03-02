// sketch.js

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth,windowHeight);
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
function draw(){
  fill(random(0,7),random(0,200),random(0,200));
  rect(random(100,windowHeight),random(500),random(100,),random(100));

}