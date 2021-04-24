var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
 
  fixedRect = createSprite(400,200,80,50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
}

function draw() {
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if ( movingRect.x -fixedRect.x < fixedRect.width/2 +movingRect.width/2
  && fixedRect.x -movingRect.x < fixedRect.width/2 +movingRect.width/2
  && movingRect.y -fixedRect.y < fixedRect.height/2 +movingRect.height/2
  && fixedRect.y -movingRect.y < fixedRect.height/2 +movingRect.height/2
  ){

  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red";

}
else{

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}
  
console.log(movingRect.x -fixedRect.x);

console.log(fixedRect.width/2 +movingRect.width/2);
  background(0);  
  drawSprites();
}