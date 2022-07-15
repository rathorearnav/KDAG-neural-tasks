/* KDAG LOGO */
//Arnav Rathore
//21MT10009


function setup() {
  createCanvas(1000, 1000,WEBGL);
}

function draw() {
  background('white');
  //page1
  strokeWeight(2);
  line(60,60,105,60);
  line(60,60,60,150);
  line(60,150,120,150);
  line(120,150,120,75);
  line(105,60,120,75);
  
  //page2
  strokeWeight(2);
  line(160,60,205,60);
  line(160,60,160,150);
  line(160,150,220,150);
  line(220,150,220,75);
  line(205,60,220,75);
  
  //page3
  strokeWeight(2);
  line(260,60,305,60);
  line(260,60,260,150);
  line(260,150,320,150);
  line(320,150,320,75);
  line(305,60,320,75);
  
 //strokeWeight(3);
 //point(90,150);
 //point(115,200);
 //point(0,170);
 //point(64,220);
 //point(25,100);

  //Bezier curve1
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(90,150);
  quadraticVertex(120, 180,20, 180);
  quadraticVertex(-40, 170, -20, 80);
  endShape();
  
  //strokeWeight(3);
  //point(190,60);
  
  //Bezier curve2
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(190, 60);
  quadraticVertex(220,-60,100, -20);
  endShape();
  
  //Bezier curve3
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(320, 113);
  quadraticVertex(550,-400,65,-40);
  endShape();

  //arrows
  strokeWeight(3);
  line(-20,80,-10,90);
  line(-20,80,-30,90);
  
  line(100,-20,110,-10);
  line(100,-20,110,-30);
  
  line(65,-40,75,-57);
  line(65,-40,85,-37);
  
  
  
  //rotating box 
  //trying to represent a software device taking in data
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.069);
  box(80);
  

}