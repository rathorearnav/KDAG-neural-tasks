/* KDAG LOGO */
//Arnav Rathore
//21MT10009


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#ffffff');
  
  //head
  strokeWeight(4);
  
  circle(208,60,63);
 
  //statistics 
  strokeWeight(3);
  line(160,80,190,47);
  line(190,47,225,80);
  line(225,80,250,47);
  
strokeWeight(3);
 circle(160,80,6);
 circle(190,48,6);
 circle(225,80,6);
 circle(250,47,6); 
  
  //neck
  noFill();
   strokeWeight(3.6);
  rect(199,102,17,50);
 
  //body
    strokeWeight(4);
  line(208,155,250,110);
   strokeWeight(4);
  line(208,155,165,110);
 
 
   strokeWeight(4);
arc(208,155,122,122,radians(315), radians(360)); 
   strokeWeight(4);
arc(208,155,122,122,radians(180), radians(225));

   strokeWeight(4);
line(269,150,269,220);
   strokeWeight(4);
line(147,150,147,220);
  
   strokeWeight(4);
line(147,220,269,220);
   strokeWeight(4);
line(167,220,167,180);
   strokeWeight(4);
line(249,220,249,180);

  
}