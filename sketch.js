
let posX=40;
let posY=40;
function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(99, 244, 153);
}


function draw(){
  fill(2,230,242);
 circle(100,50,posX)
 posX=posX +1;
 if(posX==windowWidth){
  posX=40
 }
 circle(posY,150,70)
 posY=posY +1;
 if(posY==windowHeight)
  posY=40;
}