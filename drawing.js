var scaleValue = 1;
var canvasMax = 800;
function setup() {
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var myCanvas = createCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
  myCanvas.parent('canvasContainer');
}
function draw() {
  push();
  scale(scaleValue);
  background('#D6F5D6');
  fill(100,0,0);
  ellipse(50,50, 100,100);
  fill(255,0,0);
  ellipse(250,250, 250,250);
  
  
  fill(0,0,0);
  ellipse(200,200,20,80);
  fill(0,0,0);
  ellipse(200,200,80,20);
  fill(0,0,0);
  ellipse(300,200,20,80);
  fill(0,0,0);
  ellipse(300,200,80,20);

  fill(0,0,0);
  rect(150,130,200,40);
  fill(255,255,255);
  rect(175,110,150,20);
  fill(0,0,0);
  rect(175,30,150,80);

  var daca_2017 = 201678
  var daca_2018 = 275344
  var daca_2019 = 321920
  var scaleNum = 1/5000

  
  fill(255,0,0);
  ellipse(100,420,daca_2017*scaleNum,daca_2017*scaleNum);
  fill(0,255,0);
  ellipse(200,420,daca_2018*scaleNum,daca_2018*scaleNum);
  fill(0,0,255);
  ellipse(300,420,daca_2019*scaleNum,daca_2019*scaleNum);

  textAlign(CENTER);
  fill(255,0,0)
  text("daca_2017",100,470)
  fill(0,255,0)
  text("daca_2018",200,470)
  fill(0,0,255)
  text("daca_2019",300,470)



  fill(255,0,0)
  rect(100,600,20,-daca_2017*scaleNum)
  fill(0,255,0)
  rect(200,600,20,-daca_2018*scaleNum)
  fill(0,0,255)
  rect(300,600,20,-daca_2019*scaleNum)

  fill(255,0,0)
  text("daca_2017",100,620)
  fill(0,255,0)
  text("daca_2018",200,620)
  fill(0,0,255)
  text("daca_2019",300,620)

  pop();
}

function windowResized() {
  //cavas size will be resized in case window size has changed
  var cWidth = document.getElementById('canvasContainer').offsetWidth;
  var cHeight = document.getElementById('canvasContainer').offsetHeight;
  scaleValue = min(canvasMax,cWidth)/canvasMax;
  resizeCanvas(min(canvasMax,cWidth), min(canvasMax,cWidth));
}