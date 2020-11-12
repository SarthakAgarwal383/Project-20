
var car,weight,speed,wall;
var road1,road2;


function setup() {
  createCanvas(1600,400);
  car =createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  car.velocityX=speed;

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";

  speed=random(55,90);
  weight=random(400,1500);

road1=createSprite(800,100,10,1600);
road1.shapeColor="white";

road2=createSprite(800,300,10,1600);
road2.shapeColor="white";
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5* weight* speed* speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}