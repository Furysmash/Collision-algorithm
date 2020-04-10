var fixedRect,movingRect

var rect1,rect2,rect3,rect4

var rect5,rect6

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite (300,200,80,50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite (500,200,50,80);
  movingRect.shapeColor = "green";
  rect1 = createSprite (100,100,50,50);
  rect1.shapeColor = "green";
  rect2 = createSprite (200,100,50,50);
  rect2.shapeColor = "green";
  rect3 = createSprite (300,100,50,50);
  rect3.shapeColor = "green";
  rect4 = createSprite (400,100,50,50);
  rect4.shapeColor = "green";
  rect5 = createSprite (600,100,50,50);
  rect5.shapeColor = "blue";
  rect5.velocityY = 5;
  rect6 = createSprite (600,800,50,50);
  rect6.shapeColor = "yellow";
  rect6.velocityY = -5;
}

function draw() {
  background(0);  

  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log (movingRect.x - fixedRect.x);

  if (isTouching (movingRect,rect1)) {
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  bounceOff (rect5,rect6);

  drawSprites();
}

function isTouching (object1,object2) {

  if (object1.x - object2.x < (object1.width + object2.width)/2 && 
  object2.x - object1.x < (object1.width + object2.width)/2 && 
  object1.y - object2.y < (object1.height + object2.height)/2 && 
  object2.y - object1.y < (object1.height + object2.height)/2 )  {
    return true ;
  } else {
   return false;
  }
}
function bounceOff (object1,object2) {
  if ( object1.y - object2.y < (object1.height + object2.height)/2 && 
  object2.y - object1.y < (object1.height + object2.height)/2 )  {
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
  }

   if (object1.x - object2.x < (object1.width + object2.width)/2 && 
   object2.x - object1.x < (object1.width + object2.width)/2)  {
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);
  }
}
