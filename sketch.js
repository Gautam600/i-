const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var seond,minut,hou;
function setup() {
  createCanvas(800,400);
  //engine = Engine.create();
//	world = engine.world;
angleMode(DEGREES);
}

function draw(){
seond=second();
 minut=minute();
 hou=hour();
 translate(400,200);
 
  background(255,225,205); 
  push();
  seond = map(seond,0,60,0,360);
rotate(seond);
arc(0,00,200,200,0,seond,PI+QUARTER_PI);
stroke(255,0,0);
strokeWeight(7);
line(0,0,90,0);
pop();

push();
minut =map(minut,0,60,0,360);
arc(0,0,300,200,0,PI+QUARTER_PI)
rotate(minut);
stroke(0,0,255);
strokeWeight(9);
line(0,0,75,0);
pop();

push();
hou=map(hou,0,60,0,360)
rotate(hou);
stroke(255,255,0);
strokeWeight(11);
line(0,0,50,0);
arc(0,0,300,300,0,PI+QUARTER_PI);
push(); 
  drawSprites();
}