var fixedRect,movingRect;
var ob1,ob2,ob3,ob4;
function setup() {
  createCanvas(1200,800);
 fixedRect= createSprite(400, 400, 50, 80);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,200,80,30);
 movingRect.shapeColor="green";
ob1=createSprite(100,100,50,50);
ob1.shapeColor="green";
ob2=createSprite(200,100,50,50);
ob2.shapeColor="green";
ob3=createSprite(300,100,50,50);
ob3.shapeColor="green";
ob3.velocityX=2;
ob4=createSprite(400,100,50,50);
ob4.shapeColor="green";
ob4.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if (isTouching(movingRect,ob2)){
  
  movingRect.shapeColor="red";
  ob2.shapeColor="red";

}
else{
  movingRect.shapeColor="green";
  ob2.shapeColor="green";

}
if (isTouching(movingRect,ob1)){
  
  movingRect.shapeColor="blue";
  ob1.shapeColor="blue";

}
else{
  movingRect.shapeColor="green";
  ob1.shapeColor="green";

}
if (isTouching(movingRect,ob3)){
  
  movingRect.shapeColor="red";
  ob3.shapeColor="red";

}
else{
  movingRect.shapeColor="green";
  ob3.shapeColor="green";

}
bounceOff(ob3,ob4);
  drawSprites();
}
