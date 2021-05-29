var hour ,minute , second;
var  hrAngle, minAngle , secAngle;

 function setup ( ){
   createCanvas(400,400);
   angleMode(DEGREES);
 }
 function draw(){
   background(0);
   translate(200,200);
   rotate(-90);
   hr = hour();
   min = minute();
   sec = second();
   noFill();
   stroke("white");
   strokeWeight(2);
   ellipse(0,0,300,300);
   ellipse(0,0,280,280);
   ellipse(0,0,260,260);
   secAngle = map(sec,0,60,0,360);
   minAngle = map(min,0 ,60,0,360);
   hrAngle = map(hr%12,0,12,0,360);
   push();  
   strokeWeight(3);
   stroke("red");
   rotate(secAngle);
   line(0,0,100,0);
   pop();

   push();  
   strokeWeight(5);
   stroke(0,255,0);
   rotate(minAngle);
   line(0,0,75,0);
   pop();

   push();  
   strokeWeight(7);
   stroke("yellow");
   rotate(hrAngle);
   line(0,0,50,0);
   pop();
   stroke("red");
   arc(0,0,300,300,0,secAngle);

   stroke(0,255,0);
   arc(0,0,280,280,0,minAngle);
 

 stroke("yellow");
   arc(0,0,260,260,0,hrAngle);
 
 }