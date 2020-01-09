var font;
var vehicles = [];
var cnv;

function preload() {
  font = loadFont('ArchivoNarrow-Regular.ttf');
}

function setup() {
  cnv = createCanvas(windowWidth, 200);
  centerCanvas();
  var size = 192;
  background(5,144,51);

  makePoints();
}

function makePoints(){
    var points = font.textToPoints('Go eagles!!', windowWidth/3 , 150, 130);

    for (var i = 0; i < points.length; i++) {
      var pt = points[i];
      var vehicle = new Vehicle(pt.x, pt.y);
      vehicles.push(vehicle);
    }

}

function draw() {
  if(windowResized){
   // makePoints();
  }
  background(5,144,51);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function centerCanvas(){
    var x = (windowWidth- width) /2;
    var y = 725;

    if(windowWidth >= 1200){
        cnv.position(x,y);
    }
    else if(windowWidth < 1200 && windowWidth > 1024){
        y= 900;
        cnv.position(x,y);
    }
    else if((windowWidth >= 770) && (windowWidth < 1024)){
        y = 1100;
        cnv.position(x,y);
    }
    else if((windowWidth > 500) && (windowWidth < 770)){
        y= 1250
        cnv.position(x,y);
    }
}

function windowResized(){
    centerCanvas();
}