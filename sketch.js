let bg;

function setup() {
  bg = loadImage('/home/cherry2457/Picture/index.png');
  createCanvas(400, 400);
angleMode(DEGREES);

}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
  
  
  let hr = hour();
  let min = minute();
  let sec = second();
  
  
  push();
  rotate(90);
  strokeWeight(2);
  stroke(255);
  text(hr + ":" + min + ":" + sec,0,175)
  pop();
 
  
  
  
  noFill();  
    strokeWeight(6);
   stroke(255,0,0);
  let secline = map(sec,0,60,0,360);
  arc(0,0,300,300,0,secline);
   push();
  rotate(secline);
  line(0,0,100,0);
pop();
  
  
   strokeWeight(5);
   stroke(0,255,150);
   let minline = map(min,0,60,0,360);
 arc(0,0,275,275,0,minline);
  
  
    push();
  rotate(minline);
  line(0,0,75,0);
pop();
  
  
   strokeWeight(4);
   stroke(0,0,255);
   let hrline = map(hr%12,0,12,0,360);
arc(0,0,250,250,0,hrline);
  
      push();
  rotate(hrline);
  line(0,0,50,0);
pop();
  
  
 

}